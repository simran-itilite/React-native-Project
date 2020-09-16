// this will create the navigation between the tabs

//install these packages and import them

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

//importing the home from index.js file in home folder

import {Home} from '../home';

//create navigator

const MainStack = createStackNavigator({
  Home: {
    screen: Home,
  },
});

//app container for navigation
const Navigation = createAppContainer(MainStack);

//export to the file for homeview

export {Navigation};
