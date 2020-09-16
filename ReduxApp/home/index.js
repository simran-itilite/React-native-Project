import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

//importing actions
import {INFO_REQUEST} from '../models/user/actions';
//to connect the redux

import {connect} from 'react-redux';

//defining state with properties

const mapStateToProps = (state, props) => {
  const {id, name, email,phoneno} = state.user;

  return {id, name, email,phoneno};
};

//map to dipatch the actions to reducer by creating functions 

const mapDispatchToProps = (dispatch, props) => ({
  UserInfo: () => {
    dispatch({
    //defining the action type
    
      type: INFO_REQUEST,
      payload: {},
    });
  },
});

//getting the data for the homeview from store
//includes the details , userinfo , navigation

const HomeView = ({id, name, email, UserInfo, navigation}) => {
 

  useEffect(() => {
    UserInfo();
  }, [UserInfo]);

return (
//view of the app

    <View>
      <Text>{id}</Text>
      <Text>{name}</Text>
      <Text>{email}</Text>
      <Text>{phoneno}</Text>
    </View>
  );
};

//this will connect the info (from the reducer using above function )and the homeview
const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeView);

//exporting the home function
export {Home};
