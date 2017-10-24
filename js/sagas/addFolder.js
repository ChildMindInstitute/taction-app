import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const addFolder = function* addFolder(action) {
  yield put({ type: "FOLDER_ADDING" });
  let folderID = yield call(
    Db.addExercise,
    action.payload.childID,
    action.payload.name
  );

  let images = action.payload.data;
  for (let i in images) {
    yield put({
      type: "ADD_IMAGE",
      payload: {
        exeID: folderID,
        bytes: images[i].path
      }
    });
    if (i == images.length - 1) {
      yield put({ type: "SET_FOLDER_LIST", payload: action.payload.childID });
      yield put({ type: "FOLDER_ADDED" });
    }
  }
};

const watchAddFolder = function* watchAddFolder() {
  yield takeLatest("ADD_FOLDER", addFolder);
};

export default watchAddFolder;
