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

export default randomImageListReducer;
