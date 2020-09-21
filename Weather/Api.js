import { REQUEST_WEATHER,SUCCESS_WEATHER } from '../actions/actionIndex';
import { takeLatest,all,call,put } from 'redux-saga/effects';
import axios from 'axios';


const API_KEY='439d4b804bc8187953eb36d2a8c26a02';
const ROOT_URL='https://api.openweathermap.org/data/2.5/weather?appid=($API_KEY)';

function weatherData(city){
const url ='$(ROOT_URL)&q=($city)&units=metric';
return axios.get(url);

}


function* getWeatherFromApi(){
const response = yield fetch(url,
 {
 method: 'GET'
 });
 const weather = yield response.status ===200 ? JSON.parse(response._bodyInit):[]
 return weather;



 }
export const Api={
getWeatherFromApi
};