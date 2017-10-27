import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const setParent = function* setParent() {
  try {
    yield put({ type: "PARENT_LOADING" });
    yield call(Db.reloadUser);
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
    yield put({ type: "PARENT_LOADED" });
  } catch (err) {
    console.log(err);
  }
};

const watchSetParent = function* watchSetParent() {
  yield takeLatest("SET_PARENT", setParent);
};

export default watchSetParent;
