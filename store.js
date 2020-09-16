// connect the middleware used in the app that is saga

//import from redux 
import {createStore, applyMiddleware} from 'redux';

//install redux-saga and import createSagaMiddleware from it
import createSagaMiddleware from 'redux-saga';

importing reducer by combining them
import {reducer} from './app/models/root-reducer';

//import from saga.js file
import {handler as userSaga} from './app/models/user/sagas';

//create the middleware so that side efeects can be tracked

const sagaMiddleware = createSagaMiddleware();

// create store to store the states from app
//applying saga middleware in the params and also calling reducer

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

//run the middleware

sagaMiddleware.run(userSaga);

//exporting the store
export {store};



