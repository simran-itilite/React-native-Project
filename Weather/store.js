
import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
import { watcherSagas } from './sagas/sagas_weatherdata';

import reducer from '../reducer/weather_reducer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSagas);

