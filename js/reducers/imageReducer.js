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

export default imageReducer;
