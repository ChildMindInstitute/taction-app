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
  var child;
  console.log("API call fro child DATA");
  child = yield call(Db.getChildFromParent);
  console.log("API call returned");
  yield put({ 
    type: "CHILD",
    payload: child
  });
  yield put({type: "USER_LOADED"});
};

const rootSaga = function* rootSaga() {
  console.log("root saga");
  yield all([
    setParent(),
    setChild()
  ]);
}

export default rootSaga;