import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const setChildFolder = function* setChildFolder(action) {
  try {
    let folderList = yield call(Db.fetchExeriseList, action.payload);
    for (let i in folderList) {
      if (
        folderList[i].folderDetails.status &&
        !folderList[i].folderDetails.isPlayed
      ) {
        yield put({
          type: "SET_FOLDER",
          payload: { id: folderList[i].folderID }
        });
        yield put({ type: "SET_IMAGE_LIST", payload: folderList[i].folderID });
        let nextFolder = {};
        for (let j = ++i; j < folderList.length; j++) {
          if (
            folderList[j].folderDetails.status &&
            !folderList[j].folderDetails.isPlayed
          ) {
            nextFolder = yield call(Db.getExercise, folderList[j].folderID);

            break;
          }
        }
        yield put({ type: "NEXT_FOLDER", payload: nextFolder });
        break;
      }
    }
  } catch (err) {}
  yield put({ type: "GAME_STARTED" });
};

const watchSetChildFolder = function* watchSetChildFolder() {
  yield takeLatest("SET_CHILD_FOLDER", setChildFolder);
};

export default watchSetChildFolder;
