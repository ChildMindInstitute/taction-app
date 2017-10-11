import { call, put, takeLatest } from "redux-saga/effects";
import Db from "../../js/services";

const setRandomImageList = function* setRandomImageList(){
    let list = yield call(Db.fetchRandomImageList);   
    yield put({type:'RANDOM_IMAGE_LIST', payload:list});
}

const watchSetRandomImageList = function* watchSetRandomImageList(){
    yield takeLatest('SET_RANDOM_IMAGE_LIST', setRandomImageList);
}

export default watchSetRandomImageList;