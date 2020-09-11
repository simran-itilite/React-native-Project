import React from "react";
import {StyleSheet,View,ActivityIndicator,FlatList,Text,TouchableOpacity} from "react-native";


export default class Source extends React.Component {

//static navigation

static navigationOptions = ({ navigation }) => {
return {
  title: "Comments",
  headerStyle: {backgroundColor: "gray"},
  headerTitleStyle: {textAlign: "center",flex: 1}
 };
};


//constructor

constructor(props) {
 super(props);
 this.state = {
   loading: true,
   details:[]
  };
}

//componentDidMount Method


componentDidMount(){
fetch("https://jsonplaceholder.typicode.com/comments")
.then(response => response.json())
.then((responseJson)=> {
  this.setState({
   loading: false,
   details: responseJson
  })
})
.catch(error=>console.log(error)) //to catch the errors if any
}



FlatListItemSeparator = () => {
return (
  <View style={{
     height: .5,
     width:"100%",
     backgroundColor:"rgba(0,0,0,0.5)",
}}
/>
);
}

//renderitem

renderItem=(post)=>
<TouchableOpacity style={styles.item}>
<Text style={styles.lightText}> Name :  {post.item.name}</Text>
<Text style={styles.lightText}> Comments : {post.item.body}</Text>
</TouchableOpacity>

render(){
 if(this.state.loading){
  return( 
    <View style={styles.loader}> 
      <ActivityIndicator size="large" color="#0c9"/>
    </View>
)}


//Flatlist 


return(
 <View style={styles.container}>
 <FlatList
    data= {this.state.details}
    ItemSeparatorComponent = {this.FlatListItemSeparator}
    renderItem= {item=> this.renderItem(item)Version: 1.x}
    keyExtractor= {item=>item.id.toString()}
 />
</View>
)}
}

//Stylesheet


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
   },
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
   },
  item:{
  fontFamily: 'Times New Roman',
    padding: 15,
    margin: 4,
    backgroundColor: "gray"
   }
});
