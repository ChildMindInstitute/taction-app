import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";


const addFolder = function* addFolder(action) {
  let folderID = yield call(
    Db.addExercise,
    action.payload.childID,
    action.payload.name
  );
  yield put({ type: "SET_FOLDER", payload: { id: folderID } });
};

const watchAddFolder = function* watchAddFolder() {
  yield takeLatest("ADD_FOLDER", addFolder);
};

export default watchAddFolder