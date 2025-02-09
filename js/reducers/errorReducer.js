const errorReducer = (
  state = { signinError: false, signUpError: false, invalidEmailError: false },
  action
) => {
  switch (action.type) {
    case "ERROR_SIGNIN": {
      state = { ...state, signinError: true };
      break;
    }
    case "NO_ERROR_SIGNIN": {
      state = { ...state, signinError: false };
      break;
    }

    case "ERROR_SIGNUP": {
      state = { ...state, signUpError: true };
      break;
    }

    case "NO_ERROR_SIGNUP": {
      state = { ...state, signUpError: false };
      break;
    }

    case "ERROR_EMAIL": {
      state = { ...state, invalidEmailError: true };
      break;
    }

    case "NO_ERROR_EMAIL": {
      state = { ...state, invalidEmailError: false };
      break;
    }

    case "CLEAR_STORE": {
      state = {
        ...state,
        signinError: false,
        signUpError: false,
        invalidEmailError: false
      };
      break;
    }
  }
  return state;
};

export default errorReducer;
