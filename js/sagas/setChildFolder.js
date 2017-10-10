import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const setChildFolder = function* setChildFolder(action) {
  let folderList = yield call(Db.fetchExeriseList, action.payload);
  for (let i in folderList) {
    console.log(folderList);
    if (
      folderList[i].folderDetails.status &&
      !folderList[i].folderDetails.isPLayed
    ) {
      yield put({
        type: "SET_FOLDER",
        payload: { id: folderList[i].folderID }
      });
      yield put({ type: "SET_IMAGE_LIST", payload: folderList[i].folderID });
      for (let j = ++i; j < folderList.length; j++) {
        if (
          folderList[i].folderDetails.status &&
          !folderList[i].folderDetails.isPLayed
        ) {
          let nextFolder = yield call(Db.getExercise, folderList[i].folderID);
          yield put({ type: "NEXT_FOLDER", payload: nextFolder });
          break;
        }
      }
      break;
    }
  }
};

const watchSetChildFolder = function* watchSetChildFolder() {
  yield takeLatest("SET_CHILD_FOLDER", setChildFolder);
};

export default watchSetChildFolder;