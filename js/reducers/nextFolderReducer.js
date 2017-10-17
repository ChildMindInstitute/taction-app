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

export default nextFolderReducer;
