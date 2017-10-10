import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const logoutUser = function* logoutUser() {
  yield call(Db.logoutUser);
  yield put({ type: "CLEAR_STORE" });
};

const watchLogoutUser = function* watchLogoutUser() {
  yield takeLatest("USER_SIGN_OUT", logoutUser);
};

export default watchLogoutUser;