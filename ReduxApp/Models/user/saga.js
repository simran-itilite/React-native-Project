// this sagas helps in keeping the tract of asynchronous actiions/sideeffects by using generator functions

//import redux-saga/effects
import {takeEvery, put} from 'redux-saga/effects';

//importing the actions
import {
 INFO_REQUEST,
 INFO_REQUEST_SUCCESS,
} from './actions';


// generator functions * 
function* handler() {
  
  //yield is built-in function allows generator function usage sequentially
  //takeEvery :allows multiple fetchData instances to be started concurrently
  //takeLatest :return the latest version of data
  
  yield takeEvery(INFO_REQUEST, UserInfo);
}

function* UserInfo(action) {
  //using try and catch promise
  try {
    // API call
    //yield put :put is "putting" the action back into middleware
    yield put({
      type: INFO_REQUEST_SUCCESS,
      payload: {
        id: '1',
        name: 'Simran',
        email: 'simi@gmail.com',
        phoneno:'7051893904',
      },
    });
  } catch (err) {
    // Handle error
  }
}

//exporting the handler function

export {handler};
