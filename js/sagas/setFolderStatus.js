import { call, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const setFolderStatus = function* setFolderStatus(action) {
  let update = { status: action.payload.status };
  yield call(Db.updateExercise, action.payload.folderID, update);
};

const watchSetFolderStatus = function* watchSetFolderStatus() {
  yield takeLatest("SET_FOLDER_STATUS", setFolderStatus);
};

export default watchSetFolderStatus;