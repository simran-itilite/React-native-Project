import React, { Component } from 'react';
import { Provider } from 'react-redux';

//Importing the store file

import store from './store'; 


export default class App extends Component {
    render() {
        return (
        // provider component included so that the main app.js stay connected to the store
        
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    }
}
