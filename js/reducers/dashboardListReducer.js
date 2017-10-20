const dasboardListReducer = (state = [], action) => {
  switch (action.type) {
    case "DASHBOARD_LIST": {
      state = action.payload.slice();
      break;
    }
    case "CLEAR_STORE": {
      state = [];
      break;
    }

    case "REORDER_DASHBOARD_LIST": {
      state = action.payload.slice();
      break;
    }
  }
  return state;
};

export default dasboardListReducer;
