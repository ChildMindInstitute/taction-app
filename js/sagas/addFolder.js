import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";
import { Toast } from "native-base";

const addFolder = function* addFolder(action) {
  try {
    yield put({ type: "FOLDER_ADDING" });
    let folderID = yield call(
      Db.addExercise,
      action.payload.childID,
      action.payload.name
    );
    let images = action.payload.data;
    yield call(Db.addImage, folderID, images);
    yield put({ type: "SET_FOLDER_LIST", payload: action.payload.childID });
    yield put({ type: "FOLDER_ADDED" });
  } catch (err) {
    Toast.show({
      text: "Error creating folder",
      position: "bottom",
      buttonText: "Okay",
      duration: 1500
    });
  }
};

const watchAddFolder = function* watchAddFolder() {
  yield takeLatest("ADD_FOLDER", addFolder);
};

export default watchAddFolder;
