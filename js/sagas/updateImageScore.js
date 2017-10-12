import {put, takeLatest } from "redux-saga/effects";

const updateImageScore = function* updateImageScore(action) {
    yield put({type:'IMAGE_SCORE', payload: action.payload})
};

const watchUpdateImageScore = function* watchUpdateImageScore() {
  yield takeLatest("UPDATE_IMAGE_SCORE", updateImageScore);
};

export default watchUpdateImageScore;
