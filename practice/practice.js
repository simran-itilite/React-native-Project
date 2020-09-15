import React , { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,Button,
  StatusBar,TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,

  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {

 const [count, setCount] = useState(0);
 
 //making functions to increase and decrease the values
 
  const onPress = () => setCount(prevCount => prevCount + 1);
  const onPress1 = () => setCount(prevCount => prevCount - 1);
  return (
    <>
           <View style={styles.body}>
           <View>
         <TouchableOpacity
                 style={styles.button}
                 onPress={onPress}
               >
                 <Text>Increment</Text>
               </TouchableOpacity>

               <Text style={{textAlign:"center",padding:15}}>
               // count is called in the value 
               Count: {count}</Text>
               <TouchableOpacity
                       style={styles.button}
                       //acts as dispatcher
                       onPress={onPress1}
                     >
                       <Text>Decrement</Text>
                     </TouchableOpacity>


          </View></View>

    </>
  );
};


const styles = StyleSheet.create({
body:{
padding:10
},
  button: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10
  }
});

export default App;
