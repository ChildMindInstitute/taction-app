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
      text: "Error adding prize",
      position: "bottom",
      buttonText: "Okay",
      duration: 1500
    });
  }
};

const watchAddPrize = function* watchAddPrize() {
  yield takeLatest("ADD_PRIZE", addPrize);
};

export default watchAddPrize;
