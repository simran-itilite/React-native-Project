//adding navigations 

import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {SafeAreaView,    StyleSheet,    Text,    TextInput,      View,} from 'react-native';
// more components of navigation for creating and executing

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

 const Stack = createStackNavigator();

class App extends React.Component{
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Add Item"/>
        </Stack.Navigator>
      </NavigationContainer>
            
            <View>
            <TextInput placeholder='add name' />
            <TextInput placeholder='add Email' />
            </View>
             
            
         
    );
  }
}
