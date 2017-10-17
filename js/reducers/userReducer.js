const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "PARENT": {
      state = { ...state, parent: action.payload };
      break;
    }
    case "CHILD": {
      state = { ...state, child: action.payload };
      break;
    }

    case "CLEAR_STORE": {
      state = {};
      break;
    }
  }
  return state;
};

export default userReducer;
