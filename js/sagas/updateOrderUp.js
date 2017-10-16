import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const updateOrderUp = function* updateOrderUp(action) {
  let orderList = action.payload.orderList;
  let folderID = action.payload.folderID;
  for (let i in orderList) {
    if (orderList[i].exerciseID == folderID) {
      if (orderList[i].order > 0) {
        yield call(
          Db.updateOrder,
          action.payload.childID,
          orderList[i].exerciseID,
          --orderList[i].order,
          orderList[i - 1].exerciseID,
          ++orderList[i - 1].order
        );
        break;
      }
    }
  }
  yield put({ type: "SET_FOLDER_LIST", payload: action.payload.childID });
};

const watchUpdateOrderUp = function* watchUpdateOrderUp() {
  yield takeLatest("UPDATE_ORDER_UP", updateOrderUp);
};

export default watchUpdateOrderUp;
