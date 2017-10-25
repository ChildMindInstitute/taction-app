import { call, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const resetTodayScore = function* resetTodayScore(action) {
  yield call(Db.updateChild, action.payload.childID, {
    todayScore: 0,
    lastActivity: new Date().toDateString()
  });
};

const watchResetTodayScore = function* watchResetTodayScore() {
  yield takeLatest("RESET_TODAY_SCORE", resetTodayScore);
};

export default watchResetTodayScore;
