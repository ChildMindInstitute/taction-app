import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const setFolderList = function* setFolderList(action) {
  yield put({ type: "USER_LOADING" });
  let folderList = yield call(Db.fetchExeriseList, action.payload);
  for (let i in folderList) {
    folderList[i].imageList = yield call(
      Db.fetchImageList,
      folderList[i].folderID
    );
  }
  yield put({ type: "SET_DASHBOARD_LIST", payload: folderList });
  yield put({ type: "USER_LOADED" });
};

const watchSetFolderList = function* watchSetFolderList() {
  yield takeLatest("SET_FOLDER_LIST", setFolderList);
};

export default watchSetFolderList;