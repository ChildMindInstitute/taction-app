import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const updateOrderUp = function* updateOrderUp(action) {
  let orderList = action.payload.orderList;
  let folderID = action.payload.folderID;
  let dashboardList = action.payload.dashboardList;
  for (let i = 0; i < orderList.length; i++) {
    if (orderList[i].exerciseID == folderID) {
      if (orderList[i].order > 0) {
        let temp = dashboardList[orderList[i].order];
        dashboardList[orderList[i].order] =
          dashboardList[orderList[i - 1].order];
        dashboardList[orderList[i - 1].order] = temp;
        --orderList[i].order;
        ++orderList[i - 1].order;
        yield put({ type: "REORDER_DASHBOARD_LIST", payload: dashboardList });
        yield put({ type: "REORDER_ORDER_LIST", payload: orderList });
        yield put({ type: "FOLDER_REORDERED" });
        break;
      }
    }
  }
};

const watchUpdateOrderUp = function* watchUpdateOrderUp() {
  yield takeLatest("UPDATE_ORDER_UP", updateOrderUp);
};

export default watchUpdateOrderUp;
