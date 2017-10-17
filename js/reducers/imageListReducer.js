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

export default imageListReducer;
