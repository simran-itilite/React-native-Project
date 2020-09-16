//in this file we create actions that are to be performed in the app and export them so that we can define them in reducer .

// we will have three action request, failure and success of gettting info
//request for info
const INFO_REQUEST = 'user/INFO_REQUEST';

//request is success
const INFO_REQUEST_SUCCESS =
  'user/INFO_REQUEST_SUCCESS';

// request is failure
const GET_ALL_USER_INFO_REQUEST_FAILURE =
  'user/INFO_REQUEST_FAILURE';

// exporting the action types
export {
  INFO_REQUEST,
  INFO_REQUEST_SUCCESS,
  INFO_REQUEST_FAILURE,
};

