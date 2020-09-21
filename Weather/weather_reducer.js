import { SUCCESS_WEATHER } from '../actions/actionIndex';




const weather_reducer= (state=[],action) =>{
switch(action.type){
case SUCCESS_WEATHER:
return[action.payload.data,...state];

}
return state;
}
export default weather_reducer;