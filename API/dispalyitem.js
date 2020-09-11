//render the item to dispaly
renderItem=(details)=>
//touchableopacity to respond to touches
<TouchableOpacity>
//display the items from json file like name, email,with their attributes name in json file
  <Text>{details.item.name}</Text> 
  <Text>{details.item.email}</Text>
  <Text>{details.item.body}</Text>
  </TouchableOpacity>
