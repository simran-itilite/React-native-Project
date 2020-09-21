import { SUCCESS_WEATHER } from '../actions/actionIndex';

export default(state=[],action) =>{
switch(action.type){
case SUCCESS_WEATHER:
return[action.payload.data,...state];

}

return state;
}