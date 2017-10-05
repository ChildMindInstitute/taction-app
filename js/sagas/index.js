import {all,call, put, take, takeEvery} from 'redux-saga/effects';
import Db from '../../js/services';

const setParentEvery = function* setParentEvery(){
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

const setParent = function* setParent(){
  yield takeEvery('SET_PARENT', setParentEvery);
}

const setChildEvery = function* setChildEvery(){
  console.log("API call for child DATA");
  var child = yield call(Db.getChildFromParent);
  console.log("API call returned");
  yield put({ 
    type: "CHILD",
    payload: child
  });
  yield put({type: 'USER_LOADED'})
  
}

const setChild = function* setChild() {
  yield takeEvery("SET_CHILD",setChildEvery );
};

const signIn = function* signIn(action){
  console.log(action.payload, "inside user sign in saga");
  try{  
    yield put({type: "USER_LOADING"});
    yield call(Db.signIn, action.payload.username, action.payload.password);
    yield put({type: "SET_PARENT"});
    yield put({type: "SET_CHILD"});
  }catch(res){
    yield put({type:'ERROR_SIGNIN',payload:res})
  }  
} 

const userSignIn = function* userSignIn(){
  var user = yield takeEvery("USER_SIGN_IN", signIn);
  console.log(user, "logging takevery return");
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
  yield put({type:'SET_PARENT'});
}

const addChild = function* addChild(){
  var child = yield take('ADD_CHILD');
  yield call(Db.createChild, child.payload.name, child.payload.age);
  yield put({type:'SET_CHILD'});
}

const logoutUserEvery = function* logoutUserEvery(){
  yield call(Db.logoutUser);
  yield put({type: 'CLEAR_STORE',});
  
}

const logoutUser= function* logoutUser(){
  yield takeEvery('USER_SIGN_OUT', logoutUserEvery);
}


const rootSaga = function* rootSaga() {
  console.log("root saga");
  yield all([userSignIn(), setParent(), setChild(), setConsent(), userSignUp(), addChild(), logoutUser()]);
}

export default rootSaga;