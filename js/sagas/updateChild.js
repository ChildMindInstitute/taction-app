import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const updateChild = function* updateChild(action){
    yield call(Db.updateChild, action.payload.id, action.payload.update);
    yield put({type:"SET_CHILD"});
}

const watchUpdateChild = function* watchUpdateChild(){
    yield takeLatest('UPDATE_CHILD', updateChild);
}

export default watchUpdateChild;