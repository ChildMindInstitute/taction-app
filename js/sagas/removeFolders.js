import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const removeFolders = function* removeFolders(action) {
  let list = action.payload.items;
  let childID = action.payload.childID;
  for (let i in action.payload) {
    yield call(Db.removeFolder, list[i].folderID);
  }
  yield put({ type: "SET_FOLDER_LIST", payload: childID });
};

const watchRemoveFolders = function* watchRemoveFolders() {
  yield takeLatest("REMOVE_FOLDERS", removeFolders);
};

export default watchRemoveFolders;
