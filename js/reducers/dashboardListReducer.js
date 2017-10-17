const dasboardListReducer = (state = [], action) => {
  switch (action.type) {
    case "DASHBOARD_LIST": {
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

export default dasboardListReducer;
