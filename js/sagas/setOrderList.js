import { put, takeLatest } from "redux-saga/effects";

const setOrderList = function* setOrderList(action) {
  yield put({ type: "ORDER_LIST", payload: action.payload });
};

const watchSetOrderList = function* watchSetOrderList() {
  yield takeLatest("SET_ORDER_LIST", setOrderList);
};

export default watchSetOrderList;
