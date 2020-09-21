import React , { Component }from 'react';
import {
  StyleSheet,
TextInput,
  View,Button,
  Text
 } from 'react-native';

 import { Provider } from 'react-redux';
  export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
            </Provider>
        );
    }
}
