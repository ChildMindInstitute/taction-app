const prizeListReducer = (state = [], action) => {
  switch (action.type) {
    case "PRIZE_LIST": {
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

export default prizeListReducer;
