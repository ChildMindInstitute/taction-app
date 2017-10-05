import {all,call, put, take, takeLatest} from 'redux-saga/effects';
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
  console.log("setParentEvery");
}

const setParent = function* setParent(){
  yield takeLatest('SET_PARENT', setParentEvery);
  console.log("setParent");
}
const setChildEvery = function* setChildEvery(){
  var child = yield call(Db.getChildFromParent);
  yield put({ 
    type: "CHILD",
    payload: child
  });
  yield put({type: 'USER_LOADED'}) ;
  console.log("setchildevery");
}

const setChild = function* setChild() {
  yield takeLatest("SET_CHILD",setChildEvery );
  console.log("setChild")
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
   yield takeLatest("USER_SIGN_IN", signIn);
}

const setConsent = function* setConsent(){
  var consent = yield take("SET_CONSENT");
  console.log(consent, "logging consent in saga");
  yield put({type: "CONSENT", payload: {Term1: consent.payload.Term1, Term2: consent.payload.Term2, Term3: consent.payload.Term3} });
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
  console.log("logout");
  yield takeLatest('USER_SIGN_OUT', logoutUserEvery);
}

const setNewParent = function* setNewParent() {
  yield take("SET_NEW_PARENT");
  console.log("setnewparent");
  const user = Db.getAuth().currentUser;
  yield put({
    type: "PARENT",
    payload: {
      UID: user.uid,
      name: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified
    }
  });
};

const userSignUp = function* userSignUp(){
  let user=yield take('USER_SIGNUP');  
  yield call(Db.createParent, user.payload.email, user.payload.password, user.payload.username, user.payload.consent);
  yield put({type:"SET_NEW_PARENT"});
}

const rootSaga = function* rootSaga() {
  console.log("root saga");
  yield all([userSignUp(),setParent(), userSignIn(),logoutUser(),  setChild(), setConsent(),  addChild(), setNewParent() ]);
}

export default rootSaga;