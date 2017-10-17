import { call, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const resetPassword = function* resetPassword(action) {
  yield call(Db.resetPassword, action.payload);
};

const watchResetPassword = function* watchResetPassword() {
  yield takeLatest("RESET_PASSWORD", resetPassword);
};

export default watchResetPassword;
