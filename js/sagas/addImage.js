import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const addImage = function* addImage(action) {
  try {
    yield call(Db.addImage, action.payload.exeID, action.payload.bytes);
  } catch (err) {
    console.log(err);
  }
};

const watchAddImage = function* watchAddImage() {
  yield takeLatest("ADD_IMAGE", addImage);
};

export default watchAddImage;