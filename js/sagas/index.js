import {all,call, put, take} from 'redux-saga/effects';
import Db from '../../js/services';

const setParent = function* setParent(){
  console.log("inside setParent")
  yield take('SET_PARENT');
  const user = Db.getAuth().currentUser;
  yield put({
    type: 'PARENT',
    payload:{
      UID: user.uid,
      name: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
    } 
  })
}

const setChild = function* setChild() {
  console.log("inside Age");
  yield take("SET_CHILD");
  console.log("API call for child DATA");
  var child = yield call(Db.getChildFromParent);
  console.log("API call returned");
  yield put({ 
    type: "CHILD",
    payload: child
  });
  yield put({type: "USER_LOADED"});
};

const userSignIn = function* userSignIn(){
  var user = yield take("USER_SIGN_IN");
  console.log(user.payload, "inside user sign in saga");
  yield put({type: "USER_LOADING"});
  yield call(Db.signIn, user.payload.username, user.payload.password);
  yield put({type: "SET_PARENT"});
  yield put({type: "SET_CHILD"});
}

const setConsent = function* setConsent(){
  var consent = yield take("SET_CONSENT");
  console.log(consent, "logging consent in saga");
  yield put({type: "CONSENT", payload: {Term1: consent.payload.Term1, Term2: consent.payload.Term2, Term3: consent.payload.Term3} });
}

const userSignUp = function* userSignUp(){
  var user = yield take('USER_SIGNUP');
  console.log(user.payload);
  yield call(Db.createParent, user.payload.email, user.payload.password, user.payload.username, user.payload.consent);
}

const addChild = function* addChild(){
  var child = yield take('ADD_CHILD');
  //console.log(child);
  yield call(Db.createChild, child.payload.name, child.payload.age);
  yield put({type:'SET_CHILD'});
}

const rootSaga = function* rootSaga() {
  console.log("root saga");
  yield all([
    setParent(),
    setChild(),
    userSignIn(),
    setConsent(),
    userSignUp(),
    addChild()
  ]);
}

export default rootSaga;