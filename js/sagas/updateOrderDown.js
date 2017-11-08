import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const updateOrderDown = function* updateOrderDown(action) {
  let orderList = action.payload.orderList;
  let folderID = action.payload.folderID;
  let dashboardList = action.payload.dashboardList;
  yield put({ type: "FOLDER_REORDERING" });
  for (let i = 0; i < orderList.length; i++) {
    if (orderList[i].exerciseID == folderID) {
      if (orderList[i].order < orderList.length - 1) {
        let temp = dashboardList[orderList[i].order];
        dashboardList[orderList[i].order] =
          dashboardList[orderList[i + 1].order];
        dashboardList[orderList[i + 1].order] = temp;
        ++orderList[i].order;
        --orderList[i + 1].order;
        yield call(
          Db.updateOrder,
          action.payload.childID,
          orderList[i].exerciseID,
          orderList[i].order,
          orderList[i + 1].exerciseID,
          orderList[i + 1].order
        );
        yield put({ type: "REORDER_DASHBOARD_LIST", payload: dashboardList });
        yield put({ type: "REORDER_ORDER_LIST", payload: orderList });
        yield put({ type: "FOLDER_REORDERED" });
        break;
      }
    }
  }
};

const watchUpdateOrderDown = function* watchUpdateOrderDown() {
  yield takeLatest("UPDATE_ORDER_DOWN", updateOrderDown);
};

export default watchUpdateOrderDown;
