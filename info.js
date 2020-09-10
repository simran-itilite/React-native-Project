import * as React from 'react';
import { Text,TextInput, View, StyleSheet } from 'react-native;

export default function App() {
  return (
    <View>
      <Text  style={styles.header}>
        Lets Register YOU !!
      </Text>
       <TextInput  style={styles.container}
                 defaultValue="Your Name">
       
        </TextInput>
         <TextInput style={styles.container}
          defaultValue="Your Age" >
       
        </TextInput>
       </View>
  );
  }
  const styles = StyleSheet.create({
  container: 
  {
  height: 40,
          margin: 5,
          padding:10,
          borderColor: 'red',
          borderBottomWidth: 1
           },
 header:
 {
 color:'red',
 margin : 15,
 flex :1,
 textAlign:'center',
 fontFamily:'verdana',
 fontSize:25,
 padding:10
 
 }
 });    
         





