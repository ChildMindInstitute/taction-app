import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const setPrizeList = function* setPrizeList(action) {
  try {
    let prizeList = yield call(Db.fetchPrizeList, action.payload);
    yield put({ type: "PRIZE_LIST", payload: prizeList });
  } catch (error) {}
};

const watchSetPrizeList = function* watchSetPrizeList() {
  yield takeLatest("SET_PRIZE_LIST", setPrizeList);
};

export default watchSetPrizeList;
