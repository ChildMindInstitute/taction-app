import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const updatePrizeToDelivered = function* updatePrize(action) {
  yield call(
    Db.updatePrizeToDelivered,
    action.payload.childID,
    action.payload.prizeID
  );
  yield put({ type: "SET_PRIZE_LIST", payload: action.payload.childID });
};

const watchUpdatePrizeToDelivered = function* watchUpdatePrize() {
  yield takeLatest("UPDATE_PRIZE_TO_DELIVERED", updatePrizeToDelivered);
};

export default watchUpdatePrizeToDelivered;
