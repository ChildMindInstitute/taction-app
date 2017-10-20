import { put, take } from "redux-saga/effects";

const setConsent = function* setConsent() {
  var consent = yield take("SET_CONSENT");
  yield put({
    type: "CONSENT",
    payload: {
      term1: consent.payload.term1,
      term2: consent.payload.term2,
      term3: consent.payload.term3
    }
  });
};

export default setConsent;
