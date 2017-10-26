import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const removePrize = function* removeEventListener(action) {
  yield call(Db.removePrize, action.payload.childID, action.payload.prizeID);
  yield put({ type: "SET_PRIZE_LIST", payload: action.payload.childID });
};

const watchRemovePrize = function* watchRemovePrize() {
  yield takeLatest("REMOVE_PRIZE", removePrize);
};

export default watchRemovePrize;
