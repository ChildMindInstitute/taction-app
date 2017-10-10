import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const updateSettings = function* updateSettings(action){
    yield call(Db.updateSettings, action.payload.update);
    yield put({type:'SET_PARENT'});
}

const watchUpdateSettings = function* watchUpdateSettings(){
    yield takeLatest('UPDATE_SETTINGS', updateSettings);
}

export default watchUpdateSettings;