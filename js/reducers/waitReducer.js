const waitReducer = (
  state = {
    parentLoaded: false,
    userLoaded: false,
    dashboardLoaded: false,
    childListLoaded: false,
    gameOver: false,
    updateLoaded: false,
    folderRemoved: false,
    folderReordered: false,
    folderAdded: false,
    stockImagesLoaded: false,
    verifyLoaded: false
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
    case "PARENT_LOADING": {
      state = { ...state, parentLoaded: false };
      break;
    }
    case "PARENT_LOADED": {
      state = { ...state, parentLoaded: true };
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
    case "FOLDER_ADDING": {
      state = { ...state, folderAdded: false };
      break;
    }

    case "FOLDER_ADDED": {
      state = { ...state, folderAdded: true };
      break;
    }

    case "PRIZE_LOADING": {
      state = { ...state, prizeLoaded: false };
      break;
    }
    case "PRIZE_LOADED": {
      state = { ...state, prizeLoaded: true };
      break;
    }
    case "STOCK_IMAGE_LOADING": {
      state = { ...state, stockImagesLoaded: false };
      break;
    }
    case "STOCK_IMAGE_LOADED": {
      state = { ...state, stockImagesLoaded: true };
      break;
    }

    case "EMAIL_VERIFY_LOADING": {
      state = { ...state, verifyLoaded: false };
      break;
    }
    case "EMAIL_VERIFY_LOADED": {
      state = { ...state, verifyLoaded: true };
      break;
    }

    case "CLEAR_STORE": {
      state = {
        ...state,
        parentLoaded: false,
        userLoaded: false,
        dashboardLoaded: false,
        childListLoaded: false,
        gameOver: false,
        updateLoaded: false,
        folderRemoved: false,
        folderReordered: false,
        folderAdded: false,
        prizeLoaded: false,
        stockImagesLoaded: false,
        verifyLoaded: false
      };
      break;
    }
  }
  return state;
};

export default waitReducer;
