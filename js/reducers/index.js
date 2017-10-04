import {combineReducers} from 'redux';

const userReducer = (state = {} , action) => {
  switch(action.type){
      case "PARENT": {
          state = {...state, parent: action.payload}
          break;
      }
      case "CHILD":{
          state = { ...state, child: action.payload };
          break;
      }
  }
  return state;
};

const waitReducer= (state=false , action)=>{
    switch(action.type){
        case "USER_LOADING": {
            state = false ;
            break;
        }
        case "USER_LOADED":{
            state = true;
        }
    }
    return state;
}

const consentReducer=  (state={}, action)=>{
    switch(action.type){
        case 'CONSENT':{
            state=action.payload;
            break;
        }
    }
    return state;
}

const reducer =  combineReducers({
    user: userReducer,
    loaded: waitReducer,
    consent: consentReducer
});

export default reducer;