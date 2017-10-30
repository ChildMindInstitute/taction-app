import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../services";
const verifyEmail = function* verifyEmail() {
  yield put({ type: "USER_LOADING" });
  yield put({ type: "EMAIL_VERIFY_LOADING" });
  try {
    yield call(Db.reloadUser);
    console.log(Db.getAuth().currentUser);
    const res = yield call(Db.getUser);
    yield put({
      type: "PARENT",
      payload: {
        UID: res.user.uid,
        name: res.user.displayName,
        email: res.user.email,
        emailVerified: res.user.emailVerified,
        settings: res.parent.settings
      }
    });
  } catch (err) {
    console.log(err);
  }
  yield put({ type: "USER_LOADED" });
  yield put({ type: "EMAIL_VERIFY_LOADED" });
};

const watchVerifyEmail = function* watchVerifyEmail() {
  yield takeLatest("VERIFY_EMAIL", verifyEmail);
};

export default watchVerifyEmail;
