import React , { Component }from 'react';
import {
  StyleSheet,
TextInput,
  View,Button,
  Text,FlatList
 } from 'react-native';

export default class weatherComponent extends Component{
constructor(props){
super(props);
}
render(){
return(

<View>
<Button
  onPress = { () => {this.props.onSuccessWeather();
  }} title='Fetch'>
  </Button>
<FlatList
data={this.props.weather}
keyExtractor={(item) => item.name}
renderItem={({item,index}) => <Text>{'${item.name}'}
</Text>
}
/>
</View>
);

}

}




