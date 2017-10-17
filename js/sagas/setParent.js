import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const setParent = function* setParent() {
  yield call(Db.reloadUser);
  const user = Db.getAuth().currentUser;
  const parent = yield call(Db.getUser);
  yield put({
    type: "PARENT",
    payload: {
      UID: user.uid,
      name: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      settings: parent.settings
    }
  });
};

const watchSetParent = function* watchSetParent() {
  yield takeLatest("SET_PARENT", setParent);
};

export default watchSetParent;
