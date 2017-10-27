const orderListReducer = (state = [], action) => {
  switch (action.type) {
    case "ORDER_LIST": {
      state.length = 0;
      state = action.payload.slice();
      break;
    }

    case "REORDER_ORDER_LIST": {
      state.length = 0;
      state = action.payload.slice();
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
