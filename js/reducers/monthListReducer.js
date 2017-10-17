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

export default monthListReducer;
