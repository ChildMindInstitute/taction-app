import { combineReducers } from "redux";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "PARENT": {
      state = { ...state, parent: action.payload };
      break;
    }
    case "CHILD": {
      state = { ...state, child: action.payload };
      break;
    }

    case "CLEAR_STORE": {
      state = {};
      break;
    }
  }
  return state;
};

const waitReducer = (
  state = {
    userLoaded: false,
    dashboardLoaded: false,
    childListLoaded: false,
    gameOver: false,
    updateLoaded: false
  },
  action
) => {
  switch (action.type) {
    case "USER_LOADING": {
      state = { ...state, userLoaded: false };
      break;
    }
    case "USER_LOADED": {
      state = { ...state, userLoaded: true };
      break;
    }
    case "DASHBOARD_LOADING": {
      state = { ...state, dashboardLoaded: false };
      break;
    }
    case "DASHBOARD_LOADED": {
      state = { ...state, dashboardLoaded: true };
      break;
    }
    case "GAME_STARTED": {
      state = { ...state, gameOver: false };
      break;
    }
    case "GAME_OVER": {
      state = { ...state, gameOver: true };
      break;
    }
    case "CLEAR_STORE": {
      state = {
        ...state,
        userLoaded: false,
        dashboardLoaded: false,
        childListLoaded: false,
        gameOver: false,
        updateLoaded: false
      };
      break;
    }
  }
  return state;
};

const consentReducer = (state = {}, action) => {
  switch (action.type) {
    case "CONSENT": {
      state = action.payload;
      break;
    }
    case "CLEAR_STORE": {
      state = {};
      break;
    }
  }
  return state;
};

const errorReducer = (
  state = { signinError: false, signUpError: false },
  action
) => {
  switch (action.type) {
    case "ERROR_SIGNIN": {
      state = { ...state, signinError: true };
      break;
    }
    case "NO_ERROR_SIGNIN": {
      state = { ...state, signinError: false };
      break;
    }

    case "ERROR_SIGNUP": {
      state = { ...state, signUpError: true };
      break;
    }

    case "NO_ERROR_SIGNUP": {
      state = { ...state, signUpError: false };
      break;
    }

    case "CLEAR_STORE": {
      state = { ...state, signinError: false };
      break;
    }
  }
  return state;
};

const folderReducer = (state = { folderID: null }, action) => {
  switch (action.type) {
    case "FOLDER": {
      state = action.payload;
      break;
    }
    case "CLEAR_STORE": {
      state = { folderID: null };
      break;
    }
  }
  return state;
};

const imageReducer = (state = {}, action) => {
  switch (action.type) {
    case "IMAGE": {
      state = action.payload;
      break;
    }
    case "CLEAR_STORE": {
      state = {};
      break;
    }
  }
  return state;
};

const dasboardListReducer = (state = [], action) => {
  switch (action.type) {
    case "DASHBOARD_LIST": {
      state = action.payload;
      break;
    }
    case "CLEAR_STORE": {
      state = [];
      break;
    }
  }
  return state;
};

const todayListReducer = (state = [], action) => {
  switch (action.type) {
    case "TODAY_LIST": {
      state = action.payload;
      break;
    }
    case "CLEAR_STORE": {
      state = [];
      break;
    }
  }
  return state;
};

const monthListReducer = (state = [], action) => {
  switch (action.type) {
    case "MONTH_LIST": {
      state = action.payload;
      break;
    }
    case "CLEAR_STORE": {
      state = [];
      break;
    }
  }
  return state;
};

const imageListReducer = (state = [], action) => {
  switch (action.type) {
    case "IMAGE_LIST": {
      state = action.payload;
    }
    case "IMAGE_SCORE": {
      state[action.payload.index] = action.payload.image;
      break;
    }
    case "CLEAR_STORE": {
      state = [];
      break;
    }
  }
  return state;
};

const nextFolderReducer = (state = {}, action) => {
  switch (action.type) {
    case "NEXT_FOLDER": {
      state = action.payload;
      break;
    }
    case "CLEAR_STORE": {
      state = {};
      break;
    }
  }
  return state;
};

const randomImageListReducer = (state = [], action) => {
  switch (action.type) {
    case "RANDOM_IMAGE_LIST": {
      state = action.payload;
      break;
    }
    case "CLEAR_STORE": {
      state = [];
      break;
    }
  }
  return state;
};

const tempWaitReducer = (state = false, action) => {
  switch (action.type) {
    case "FOLDER_REMOVED": {
      state = true;
      break;
    }
    case "CLEAR_STORE": {
      state = false;
      break;
    }
  }
  return state;
};

const orderListReducer = (state = [], action) => {
  switch (action.type) {
    case "ORDER_LIST": {
      state = action.payload;
      break;
    }
    case "CLEAR_STORE": {
      state = [];
      break;
    }
  }
  return state;
};

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
  folderRemoved: tempWaitReducer,
  orderList: orderListReducer
});

export default reducer;
