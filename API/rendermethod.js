//RENDER METHOD 
render(){
 if(this.state.loading){
  return( 
    <View > 
      <ActivityIndicator size="large"/>
    </View>
)}
return(
 <View>
 // to return data in flatlist 
 //asks for source, key and the rendered content
 <FlatList
    data= {this.state.dataSource}
    ItemSeparatorComponent = {this.FlatListItemSeparator}
    renderItem= {item=> this.renderItem(item)}
    keyExtractor= {item=>item.id.toString()}
 />
</View>
)}
}
