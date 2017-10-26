import { all } from "redux-saga/effects";
import watchSetParent from "./setParent";
import watchSetChild from "./setChild";
import watchSignIn from "./signIn";
import setConsent from "./setConsent";
import watchUserSignUp from "./userSignUp";
import addChild from "./addChild";
import watchLogoutUser from "./logoutUser";
import watchAddFolder from "./addFolder";
import watchSetFolder from "./setFolder";
import watchSetImage from "./setImage";
import watchSetFolderList from "./setFolderList";
import watchSetDashboardList from "./setDashboardList";
import watchSetFolderStatus from "./setFolderStatus";
import watchSetChildFolder from "./setChildFolder";
import watchSetChildImageList from "./setChildImageList";
import watchUpdateParent from "./updateParent";
import watchUpdateChild from "./updateChild";
import watchUpdateSettings from "./updateSettings";
import watchSetRandomImageList from "./setRandomImageList";
import watchUpdateImageScore from "./updateImageScore";
import watchUpdateFolderScore from "./updateFolderScore";
import watchSetPlayAgain from "./setPlayAgain";
import watchRemoveFolders from "./removeFolders";
import watchOrderList from "./setOrderList";
import watchUpdateOrderUp from "./updateOrderUp";
import watchUpdateOrderDown from "./updateOrderDown";
import watchResetPassword from "./resetPassword";
import watchResetTodayScore from "./resetTodayScore";
import watchVerifyEmail from "./verifyEmail";
import watchAddPrize from "./addPrize";
import watchSetPrizeList from "./setPrizeList";
import watchSetStockImageList from "./setStockImageList";
import watchRemovePrize from "./removePrize";
import watchUpdatePrize from "./updatePrize";

const rootSaga = function* rootSaga() {
  yield all([
    watchUserSignUp(),
    watchSetParent(),
    watchSignIn(),
    watchLogoutUser(),
    watchSetChild(),
    setConsent(),
    addChild(),
    watchAddFolder(),
    watchSetFolder(),
    watchSetImage(),
    watchSetFolderList(),
    watchSetDashboardList(),
    watchSetFolderStatus(),
    watchSetChildFolder(),
    watchSetChildImageList(),
    watchUpdateParent(),
    watchUpdateChild(),
    watchUpdateSettings(),
    watchSetRandomImageList(),
    watchUpdateImageScore(),
    watchUpdateFolderScore(),
    watchSetPlayAgain(),
    watchRemoveFolders(),
    watchOrderList(),
    watchUpdateOrderUp(),
    watchUpdateOrderDown(),
    watchResetPassword(),
    watchResetTodayScore(),
    watchVerifyEmail(),
    watchAddPrize(),
    watchSetPrizeList(),
    watchSetStockImageList(),
    watchRemovePrize(),
    watchUpdatePrize()
  ]);
};

export default rootSaga;
