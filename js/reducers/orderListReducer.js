const orderListReducer = (state = [], action) => {
  switch (action.type) {
    case "ORDER_LIST": {
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

export default orderListReducer;
