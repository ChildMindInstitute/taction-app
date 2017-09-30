import {TEST} from '../actions/';

export default (state="", {type, text=""})=> {
    switch(type){
        case TEST:
            return text;
        default:
            return state;
    }
}; 