import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const setPlayAgain = function* setPlayAgain(action) {
  let childID = action.payload.childID;
  let exeID = action.payload.exeID;

  yield call(Db.updateExercise, exeID, { isPlayed: false });
  yield put({ type: "SET_CHILD_FOLDER", payload: childID });
};

const watchSetPlayAgain = function* watchSetPlayAgain() {
  yield takeLatest("SET_PLAY_AGAIN", setPlayAgain);
};

export default watchSetPlayAgain;
