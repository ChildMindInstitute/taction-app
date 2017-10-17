const consentReducer = (state = {}, action) => {
  switch (action.type) {
    case "CONSENT": {
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

export default consentReducer;
