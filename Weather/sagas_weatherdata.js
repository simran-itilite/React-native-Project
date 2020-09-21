import { REQUEST_WEATHER,SUCCESS_WEATHER } from '../actions/actionIndex';
import { takeLatest,all,call,put } from 'redux-saga/effects';
import axios from 'axios';


const API_KEY='439d4b804bc8187953eb36d2a8c26a02';
const ROOT_URL='https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02';

function weatherData(city){
const url ='$(ROOT_URL)&q=($city)&units=metric';
return axios.get(url);

}


export function* weatherDataSaga(action){
try{
const response = yield call(weatherData,action.payload.city);
yield put({ type: SUCCESS_WEATHER, payload:response});
}
catch(err){
console.log(err);

}
}

export function* watcherSaga(){
yield all([yield takeLatest(REQUEST_WEATHER,weatherDataSaga)]
);
}