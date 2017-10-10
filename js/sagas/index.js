import { all, put, take } from "redux-saga/effects";
import watchSetParent from './setParent';
import watchSetChild from './setChild';
import watchSignIn from './signIn';
import setConsent from './setConsent';
import userSignUp from './userSignUp';
import addChild from './addChild';
import watchLogoutUser from './logoutUser';
import watchAddFolder from './addFolder';
import watchSetFolder from './setFolder';
import watchAddImage from './addImage';
import watchSetImage from './setImage';
import watchSetFolderList from './setFolderList';
import watchSetDashboardList from './setDashboardList';
import watchSetFolderStatus from './setFolderStatus';
import watchSetChildFolder from './setChildFolder';
import watchSetChildImageList from './setChildImageList';


const rootSaga = function* rootSaga() {
  yield all([
    userSignUp(),
    watchSetParent(),
    watchSignIn(),
    watchLogoutUser(),
    watchSetChild(),
    setConsent(),
    addChild(),
    watchAddFolder(),
    watchSetFolder(),
    watchAddImage(),
    watchSetImage(),
    watchSetFolderList(),
    watchSetDashboardList(),
    watchSetFolderStatus(),
    watchSetChildFolder(),
    watchSetChildImageList()
  ]);
};

export default rootSaga;
