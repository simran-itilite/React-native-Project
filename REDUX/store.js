// importing redux components 
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import reducer file
import reducers from './reducers.js'; 

// create store and connect to reducer and middleware

export default createStore(reducers, applyMiddleware(thunk));
