import {REQUEST_WEATHER, SUCCESS_WEATHER } from '../actions/actionIndex';
//saga Effects
import { takeLatest,put } from 'redux-saga/effects';
import { Api } from './Api';

function* fetchWeather(){
try{
const recievedWeather = yield Api.getWeatherFromApi();
yield put({ type: SUCCESS_WEATHER, recievedWeather: recievedWeather});

}
catch(error)
{
console.log(err);
}
}

export function* watchFetchWeather(){
yield takeLatest(SUCCESS_WEATHER, fetchWeather);
}
