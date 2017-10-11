import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const signIn = function* signIn(action) {
  try {
    yield put({ type: "USER_LOADING" });
    yield call(Db.signIn, action.payload.username, action.payload.password);
    yield put({type: 'NO_ERROR_SIGNIN'});
    yield put({ type: "SET_PARENT" });
    yield put({ type: "SET_CHILD" });
  } catch (res) {
    yield put({ type: "ERROR_SIGNIN", payload: res });
  }
};

const watchSignIn = function* watchSignIn() {
  yield takeLatest("USER_SIGN_IN", signIn);
};

export default watchSignIn;
