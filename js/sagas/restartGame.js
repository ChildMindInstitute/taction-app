import { call, put, takeLatest } from 'redux-saga/effects';
import Db from '../../js/services';

const restartGame = function* restartGame(action) {
  let childID = action.payload.childID;
  yield call(Db.resetAllExcercises, childID);
  yield put({ type: 'SET_CHILD_FOLDER', payload: childID });
};

const watchSetrestartGame = function* watchSetrestartGame() {
  yield takeLatest('RESTART_GAME', restartGame);
};

export default watchSetrestartGame;
