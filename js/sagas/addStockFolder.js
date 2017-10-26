import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const addStockFolder = function* addStockFolder(action) {
  yield put({ type: "FOLDER_ADDING" });
  let folderID = yield call(
    Db.addExercise,
    action.payload.childID,
    action.payload.name
  );
  let images = action.payload.data;
  yield call(Db.addStockImages, folderID, images);
  yield put({ type: "SET_FOLDER_LIST", payload: action.payload.childID });
  yield put({ type: "FOLDER_ADDED" });
};

const watchAddStockFolder = function* watchAddStockFolder() {
  yield takeLatest("ADD_STOCK_FOLDER", addStockFolder);
};

export default watchAddStockFolder;
