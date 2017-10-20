import { put, takeLatest } from "redux-saga/effects";
import calculate from "../componentsCommon/calcutateStars";
const setDashboardList = function* setDashboardList(action) {
  try {
    let dashboardList = [];
    let todayList = [];
    let monthList = [];
    let currentDate = new Date().toDateString();
    let currentMonth = currentDate.slice(4, 7);
    for (let i in action.payload) {
      let dataFolderContent = [];
      for (let j in action.payload[i].imageList) {
        dataFolderContent.push({
          imageID: action.payload[i].imageList[j].imageID,
          image: { uri: action.payload[i].imageList[j].imageDetails.url },
          correctTaps: action.payload[i].imageList[j].imageDetails.correctTaps,
          wrongTaps: action.payload[i].imageList[j].imageDetails.wrongTaps,
          isCompleted: action.payload[i].imageList[j].imageDetails.status
        });
      }
      dashboardList.push({
        folderID: action.payload[i].folderID,
        name: action.payload[i].folderDetails.exerciseName,
        correctTaps: action.payload[i].folderDetails.correctTaps,
        wrongTaps: action.payload[i].folderDetails.wrongTaps,
        points: action.payload[i].folderDetails.score,
        stars: require("../assets/all-stars.png"),
        dataFolderContent: dataFolderContent,
        status: action.payload[i].folderDetails.status
      });
      if (action.payload[i].folderDetails.timeStamp == currentDate) {
        todayList.push({
          folderID: action.payload[i].folderID,
          name: action.payload[i].folderDetails.exerciseName,
          correctTaps: action.payload[i].folderDetails.correctTaps,
          wrongTaps: action.payload[i].folderDetails.wrongTaps,
          points: action.payload[i].folderDetails.score,
          stars: calculate(
            action.payload[i].folderDetails.correctTaps,
            action.payload[i].folderDetails.wrongTaps
          ),
          dataFolderContent: dataFolderContent,
          status: action.payload[i].folderDetails.status
        });
      }
      if (
        action.payload[i].folderDetails.timeStamp.slice(4, 7) == currentMonth
      ) {
        monthList.push({
          folderID: action.payload[i].folderID,
          name: action.payload[i].folderDetails.exerciseName,
          correctTaps: action.payload[i].folderDetails.correctTaps,
          wrongTaps: action.payload[i].folderDetails.wrongTaps,
          points: action.payload[i].folderDetails.score,
          stars: calculate(
            action.payload[i].folderDetails.correctTaps,
            action.payload[i].folderDetails.wrongTaps
          ),
          dataFolderContent: dataFolderContent,
          status: action.payload[i].folderDetails.status
        });
      }
    }
    yield put({ type: "DASHBOARD_LIST", payload: dashboardList });
    yield put({ type: "TODAY_LIST", payload: todayList });
    yield put({ type: "MONTH_LIST", payload: monthList });
  } catch (err) {
    console.log(err);
  }
};

const watchSetDashboardList = function* watchSetDashboardList() {
  yield takeLatest("SET_DASHBOARD_LIST", setDashboardList);
};

export default watchSetDashboardList;
