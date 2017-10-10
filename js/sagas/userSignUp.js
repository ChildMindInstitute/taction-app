import { call, put, take } from "redux-saga/effects";
import Db from "../../js/services";

const userSignUp = function* userSignUp() {
  let user = yield take("USER_SIGNUP");
  yield call(
    Db.createParent,
    user.payload.email,
    user.payload.password,
    user.payload.username,
    user.payload.consent
  );
  yield call(Db.verifyEmail);
  yield put({ type: "SET_PARENT" });
};

export default userSignUp;