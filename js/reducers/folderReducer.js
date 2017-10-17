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

export default folderReducer;
