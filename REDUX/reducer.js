//IMPORT THE ACTION TYPES FROM ACTION FOLDER

import { INFO, DELETE_INFO} from "./actions" 

//Set the state 
//array named data to store data added

let dataState = { info: [] };

// reducer is defined 

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
    //to add info 
    case INFO:
            let { quote } = action.data;
            return {...state, info};
            
     default:
            return state;
