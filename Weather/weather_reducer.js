import { combineReducers } from 'redux'; 

import { SUCCESS_WEATHER } from '../actions/actionIndex';

const dataReducer = (state=[],action) =>{
switch(action.type){
case SUCCESS_WEATHER:
return[action.payload.data,...state];

}

return state;
}

const rootReducer = combineReducers({dataReducer});

export default rootReducer;
