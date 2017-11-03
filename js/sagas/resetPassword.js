import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const resetPassword = function* resetPassword(action) {
  yield put({ type: "FORGOT_PASSWORD_LOADING" });
  yield put({ type: "NO_ERROR_EMAIL" });
  try {
    yield call(Db.resetPassword, action.payload);
    yield put({ type: "FORGOT_PASSWORD_LOADED" });
  } catch (error) {
    yield put({ type: "ERROR_EMAIL" });
    yield put({ type: "FORGOT_PASSWORD_LOADED" });
  }
};

const watchResetPassword = function* watchResetPassword() {
  yield takeLatest("RESET_PASSWORD", resetPassword);
};

export default watchResetPassword;
