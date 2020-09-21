/**
 * @format
 */
import React,{ Component } from 'react';
import {AppRegistry} from 'react-native';
import allReducers from './reducer';
import WeatherContainer from'./container/weatherContainer';

//Redux
import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//Redux-saga
import createSagaMiddleware from 'redux-saga';
import rootsaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
const App = () =>(
<Provider store={store}>
< WeatherContainer/ >
</Provider>
)

AppRegistry.registerComponent('WeatherApp', () => App);
