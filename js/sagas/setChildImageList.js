import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const setChildImageList = function* setChildImageList(action) {
  let imageList = yield call(Db.fetchImageList, action.payload);
  yield put({ type: "IMAGE_LIST", payload: imageList });
};

const watchSetChildImageList = function* watchSetChildImageList() {
  yield takeLatest("SET_IMAGE_LIST", setChildImageList);
};

export default watchSetChildImageList;