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

export default todayListReducer;
