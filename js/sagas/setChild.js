import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const setChild = function* setChild() {
  try {
    var child = yield call(Db.getChildFromParent);
    yield put({
      type: "CHILD",
      payload: child
    });
    yield put({ type: "USER_LOADED" });
  } catch (err) {}
};

const watchSetChild = function* watchSetChild() {
  yield takeLatest("SET_CHILD", setChild);
};

export default watchSetChild;
