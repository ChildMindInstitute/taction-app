import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const updateParent = function* updateParent(action){
    yield call(Db.updateParent, action.payload);
    yield put({type:'SET_PARENT'});
}

const watchUpdateParent = function* watchUpdateParent(){
    yield takeLatest('UPDATE_PARENT', updateParent);
}

export default watchUpdateParent;