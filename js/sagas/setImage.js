import { put, takeLatest } from "redux-saga/effects";

const setImage = function* setImage(action) {
  yield put({ type: "IMAGE", payload: action.payload.imageID });
};

const watchSetImage = function* watchSetImage() {
  yield takeLatest("SET_IMAGE", setImage);
};

export default watchSetImage;
