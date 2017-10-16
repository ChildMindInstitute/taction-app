import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const setFolderList = function* setFolderList(action) {
  yield put({ type: "DASHBOARD_LOADING" });
  try {
    let orderList = yield call(Db.fetchOrderList, action.payload);
    console.log(orderList);
    let folderList = yield call(Db.fetchExeriseList, action.payload);
    for (let i in folderList) {
      folderList[i].imageList = yield call(
        Db.fetchImageList,
        folderList[i].folderID
      );
    }
    yield put({ type: "SET_ORDER_LIST", payload: orderList });
    yield put({ type: "SET_DASHBOARD_LIST", payload: folderList });
    yield put({ type: "DASHBOARD_LOADED" });
  } catch (err) {
    console.log(err, "error logged in set folder list saga");
  }
};

const watchSetFolderList = function* watchSetFolderList() {
  yield takeLatest("SET_FOLDER_LIST", setFolderList);
};

export default watchSetFolderList;
