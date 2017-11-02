import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";
import { Toast } from "native-base";

const addPrize = function* addPrize(action) {
  try {
    yield call(
      Db.addPrize,
      action.payload.childID,
      action.payload.points,
      action.payload.description
    );
    yield put({ type: "SET_PRIZE_LIST", payload: action.payload.childID });
  } catch (err) {
    Toast.show({
      text: "Error:",
      position: "bottom",
      buttonText: "Cannot add prize",
      duration: 5000
    });
  }
};

const watchAddPrize = function* watchAddPrize() {
  yield takeLatest("ADD_PRIZE", addPrize);
};

export default watchAddPrize;
