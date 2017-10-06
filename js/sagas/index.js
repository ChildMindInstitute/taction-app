import {all,call, put, take, takeLatest} from 'redux-saga/effects';
import Db from '../../js/services';

const setParentEvery = function* setParentEvery(){
  const user = Db.getAuth().currentUser;
  const parent= yield call(Db.getUser);
  console.log(parent.settings, "logging current parent object");
  yield put({
    type: 'PARENT',
    payload:{
      UID: user.uid,
      name: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      settings: parent.settings
    } 
  })
}

const setParent = function* setParent(){
  yield takeLatest('SET_PARENT', setParentEvery);
}
const setChildEvery = function* setChildEvery(){
  var child = yield call(Db.getChildFromParent);
  yield put({ 
    type: "CHILD",
    payload: child
  });
  yield put({type: 'USER_LOADED'}) ;
}

const setChild = function* setChild() {
  yield takeLatest("SET_CHILD",setChildEvery );
};

const signIn = function* signIn(action){
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
  yield takeLatest('USER_SIGN_OUT', logoutUserEvery);
}

const userSignUp = function* userSignUp(){
  let user=yield take('USER_SIGNUP');  
  yield call(Db.createParent, user.payload.email, user.payload.password, user.payload.username, user.payload.consent);
  yield call(Db.verifyEmail);
  yield put({type:"SET_PARENT"});
}

const addFolder = function* addFolder(action){
  let folderID =  yield call(Db.addExercise, action.payload.childID, action.payload.name);
  yield put({type: 'SET_FOLDER', payload:{id: folderID}});
}

const watchAddFolder = function* watchAddFolder(){
  yield takeLatest('ADD_FOLDER', addFolder);
}

const setFolder = function* setFolder(action){
  let folder = yield call(Db.getExercise, action.payload.id);
  yield put({type:'FOLDER', payload: folder})
}

const watchSetFolder = function* watchSetFolder(){
  yield takeLatest('SET_FOLDER', setFolder);
}

const addImage = function* addImage(action){
  try{
    yield call(Db.addImage, action.payload.exeID, action.payload.bytes);
  }catch(err){
    console.log(err);
  }
}

const watchAddImage = function* watchAddImage(){
  yield takeLatest('ADD_IMAGE', addImage);
}

const setImage = function* setImage(action){
  yield put({type:'IMAGE', payload: action.payload.imageID});
}

const watchSetImage = function* watchSetImage(){
  yield takeLatest('SET_IMAGE', setImage);
}

const setFolderList = function* setFolderList(action){
  let folderList = yield call(Db.fetchExeriseList, action.payload);
  for(let i in folderList){
    folderList[i].imageList = yield call(Db.fetchImageList, folderList[i].folderID);
  }
  console.log(folderList);
}

const watchSetFolderList = function* watchSetFolderList(){
  yield takeLatest('SET_FOLDER_LIST', setFolderList);
}

const rootSaga = function* rootSaga() {
  yield all([userSignUp(),setParent(), userSignIn(),logoutUser(),  setChild(), setConsent(),  addChild(), watchAddFolder(), watchSetFolder(), watchAddImage(), watchSetImage(), watchSetFolderList() ]);
}

export default rootSaga;