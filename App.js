import React from 'react';

//importing the store 
import {store} from './store';
import {Provider} from 'react-redux';

//import app from index.js file
import {App} from './app/index';

const Root = () => {
  return (
  
  // to connect to the store throughout
    <Provider store={store}>
    
    //App to display 
      <App />
    </Provider>
  );
};

//export the root function 
export default Root;
