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

const waitReducer = (state = false, action) => {
  switch (action.type) {
    case "USER_LOADING": {
      state = false;
      break;
    }
    case "USER_LOADED": {
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

const errorReducer = (state = { signinError: false }, action) => {
  switch (action.type) {
    case "ERROR_SIGNIN": {
      state = { ...state, signinError: true };
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
  }
  return state;
};

const imageReducer = (state = {}, action) => {
  switch (action.type) {
    case "IMAGE": {
      state = action.payload;
      break;
    }
  }
  return state;
};

const dasboardListReducer = (state = [], action) => {
  switch (action.type) {
    case "DASHBOARD_LIST": {
      // console.log(action.payload,"easrtfghhbkdfghbjbdfhbkjfd")
      state = action.payload;
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
  dashboardList: dasboardListReducer
});

export default reducer;
