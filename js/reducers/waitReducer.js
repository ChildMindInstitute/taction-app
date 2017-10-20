const waitReducer = (
  state = {
    userLoaded: false,
    dashboardLoaded: false,
    childListLoaded: false,
    gameOver: false,
    updateLoaded: false,
    folderRemoved: false,
    folderReordered: false
  },
  action
) => {
  switch (action.type) {
    case "USER_LOADING": {
      state = { ...state, userLoaded: false };
      break;
    }
    case "USER_LOADED": {
      state = { ...state, userLoaded: true };
      break;
    }
    case "DASHBOARD_LOADING": {
      state = { ...state, dashboardLoaded: false };
      break;
    }
    case "DASHBOARD_LOADED": {
      state = { ...state, dashboardLoaded: true };
      break;
    }
    case "GAME_STARTED": {
      state = { ...state, gameOver: false };
      break;
    }
    case "GAME_OVER": {
      state = { ...state, gameOver: true };
      break;
    }
    case "FOLDER_REMOVED": {
      state = { ...state, folderRemoved: true };
      break;
    }
    case "FOLDER_REORDERING": {
      state = { ...state, folderReordered: false };
      break;
    }

    case "FOLDER_REORDERED": {
      state = { ...state, folderReordered: true };
      break;
    }

    case "CLEAR_STORE": {
      state = {
        ...state,
        userLoaded: false,
        dashboardLoaded: false,
        childListLoaded: false,
        gameOver: false,
        updateLoaded: false,
        folderRemoved: false,
        folderReordered: false
      };
      break;
    }
  }
  return state;
};

export default waitReducer;
