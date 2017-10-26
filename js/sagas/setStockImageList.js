import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const setStockImageList = function* setStockImageList() {
  let stockList = yield call(Db.fetchStockImageList);
  yield put({ type: "STOCK_IMAGE_LIST", payload: stockList });
};

const watchSetStockImageList = function* watchSetStockImageList() {
  yield takeLatest("SET_STOCK_IMAGE_LIST", setStockImageList);
};

export default watchSetStockImageList;
