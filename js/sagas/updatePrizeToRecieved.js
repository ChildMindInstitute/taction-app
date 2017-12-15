import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const updatePrizeToRecieved = function* updatePrize(action) {
  yield call(
    Db.updatePrizeToRecieved,
    action.payload.childID,
    action.payload.prizeID
  );
  yield put({ type: "SET_PRIZE_LIST", payload: action.payload.childID });
};

const watchUpdatePrizeToRecieved = function* watchUpdatePrize() {
  yield takeLatest("UPDATE_PRIZE_TO_RECIEVED", updatePrizeToRecieved);
};

export default watchUpdatePrizeToRecieved;
