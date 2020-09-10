import * as React from 'react';
import { Text,TextInput, View, StyleSheet } from 'react-native';


export default function App() {
  return (
    <View>
      <Text  style={{
      marginTop:10 ,
      textAlign: 'center',
          height: 40,
          borderColor: 'red',
        
  }}>
        Lets Register YOU !!
      </Text>
       <TextInput  style={{
          height: 40,
          margin: 5,
          padding:10,
          borderColor: 'red',
          borderBottomWidth: 1
        }}
        defaultValue="Your Name">
       
        </TextInput>
         <TextInput style={{
          height: 40,
          margin: 5,
          padding:10,
          borderColor: 'red',
          borderBottomWidth: 1
        }}
        defaultValue="Your Age" >
       
        </TextInput>
       </View>
  );
}





