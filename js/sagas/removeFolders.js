import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const removeFolders = function* removeFolders(action) {
  let list = action.payload.items;
  console.log(list);
  let childID = action.payload.childID;
  for (let i in list) {
    yield call(Db.removeFolder, list[i].folderID, childID);
  }
  yield put({ type: "SET_FOLDER_LIST", payload: childID });
  yield put({ type: "FOLDER_REMOVED" });
};

const watchRemoveFolders = function* watchRemoveFolders() {
  yield takeLatest("REMOVE_FOLDERS", removeFolders);
};

export default watchRemoveFolders;
