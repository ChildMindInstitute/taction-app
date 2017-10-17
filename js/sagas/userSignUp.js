import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const userSignUp = function* userSignUp(action) {
  let user = action;
  yield put({ type: "NO_ERROR_SIGNUP" });
  yield put({ type: "USER_LOADING" });
  try {
    yield call(
      Db.createParent,
      user.payload.email,
      user.payload.password,
      user.payload.username,
      user.payload.consent
    );
    yield put({ type: "SET_PARENT" });
    yield put({ type: "USER_LOADED" });
  } catch (err) {
    yield put({ type: "ERROR_SIGNUP" });
    yield put({ type: "USER_LOADED" });
  }
};

const watchUserSignUp = function* watchUserSignUp() {
  yield takeLatest("USER_SIGNUP", userSignUp);
};

export default watchUserSignUp;
