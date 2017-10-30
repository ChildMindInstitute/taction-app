import { cloneDeep } from "lodash";
const stockImageListReducer = (state = [], action) => {
  switch (action.type) {
    case "STOCK_IMAGE_LIST": {
      state.length = 0;
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

export default stockImageListReducer;
