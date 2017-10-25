import { combineReducers } from "redux";
import userReducer from "./userReducer";
import waitReducer from "./waitReducer";
import consentReducer from "./consentReducer";
import errorReducer from "./errorReducer";
import folderReducer from "./folderReducer";
import imageReducer from "./imageReducer";
import dasboardListReducer from "./dashboardListReducer";
import todayListReducer from "./todayListReducer";
import monthListReducer from "./monthListReducer";
import imageListReducer from "./imageListReducer";
import nextFolderReducer from "./nextFolderReducer";
import randomImageListReducer from "./randomImageListReducer";
import orderListReducer from "./orderListReducer";
import prizeListReducer from "./prizeListReducer";

const reducer = combineReducers({
  user: userReducer,
  loaded: waitReducer,
  consent: consentReducer,
  error: errorReducer,
  folder: folderReducer,
  image: imageReducer,
  dashboardList: dasboardListReducer,
  todayList: todayListReducer,
  monthList: monthListReducer,
  currentImageList: imageListReducer,
  nextFolder: nextFolderReducer,
  randomImage: randomImageListReducer,
  orderList: orderListReducer,
  prizeList: prizeListReducer
});

export default reducer;
