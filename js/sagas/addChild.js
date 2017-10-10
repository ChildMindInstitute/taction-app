import { call, put, take } from "redux-saga/effects";
import Db from "../../js/services";

const addChild = function* addChild() {
  var child = yield take("ADD_CHILD");
  yield call(Db.createChild, child.payload.name, child.payload.age);
  yield put({ type: "SET_CHILD" });
};

export default addChild;