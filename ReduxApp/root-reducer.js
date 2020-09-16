// component combinereducer used to combine reducers 

//import from redux
import {combineReducers} from 'redux';

// from the reducers.js file import the reducer function

import {reducer as userReducer} from './user/reducers';

// combining reducers

const reducer = combineReducers({
  user: userReducer,
});

//export after combining the reducers
export {reducer};
