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

export default tempWaitReducer;
