import { put, takeLatest } from "redux-saga/effects";

const setDashboardList = function* setDashboardList(action) {
  let dashboardList = [];
  for (let i in action.payload) {
    let DataFolderContent = [];
    for (let j in action.payload[i].imageList) {
      DataFolderContent.push({
        ImageID: action.payload[i].imageList[j].imageID,
        Image: { uri: action.payload[i].imageList[j].imageDetails.url },
        CorrectTaps: action.payload[i].imageList[j].imageDetails.correctTaps,
        WrongTaps: action.payload[i].imageList[j].imageDetails.wrongTaps,
        IsCompleted: action.payload[i].imageList[j].imageDetails.status
      });
    }
    dashboardList.push({
      FolderID: action.payload[i].folderID,
      Name: action.payload[i].folderDetails.exerciseName,
      CorrectTaps: action.payload[i].folderDetails.correctTaps,
      WrongTaps: action.payload[i].folderDetails.wrongTaps,
      Points: action.payload[i].folderDetails.score,
      Stars: require("../assets/Asset_5.png"),
      DataFolderContent: DataFolderContent,
      Status: action.payload[i].folderDetails.status
    });
  }
  yield put({ type: "DASHBOARD_LIST", payload: dashboardList });
};

const watchSetDashboardList = function* watchSetDashboardList() {
  yield takeLatest("SET_DASHBOARD_LIST", setDashboardList);
};

export default watchSetDashboardList;
