import { put, take } from "redux-saga/effects";

const setConsent = function* setConsent() {
  var consent = yield take("SET_CONSENT");
  yield put({
    type: "CONSENT",
    payload: {
      Term1: consent.payload.Term1,
      Term2: consent.payload.Term2,
      Term3: consent.payload.Term3
    }
  });
};

export default setConsent;