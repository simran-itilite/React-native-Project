// importing the navigation from router file and calling it in main view

import React from 'react';
import {View} from 'react-native';
import {Navigation} from './utils/router';

const App = ({}) => (
//styling inline

  <View style={{flex: 1, flexDirection: 'column'}}>
  
  //calling navigation app
    <Navigation />
  </View>
);

//exporting this app to app.js

export {App};
