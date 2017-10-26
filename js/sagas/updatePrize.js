import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const updatePrize = function* updatePrize(action) {
  yield call(
    Db.updatePrize,
    action.payload.childID,
    action.payload.prizeID,
    action.payload.update
  );
  yield put({ type: "SET_PRIZE_LIST", payload: action.payload.childID });
};

const watchUpdatePrize = function* watchUpdatePrize() {
  yield takeLatest("UPDATE_PRIZE", updatePrize);
};

export default watchUpdatePrize;
