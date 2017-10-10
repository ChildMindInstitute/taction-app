import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";


const setFolder = function* setFolder(action) {
  let folder = yield call(Db.getExercise, action.payload.id);
  yield put({ type: "FOLDER", payload: folder });
};

const watchSetFolder = function* watchSetFolder() {
  yield takeLatest("SET_FOLDER", setFolder);
};

export default watchSetFolder;