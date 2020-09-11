//lifecycle method to be called
componentDidMount()
{
//to fetch the data by URL
fetch("https://jsonplaceholder.typicode.com/comments")
//then and catch to return promise
.then(response => response.json())
.then((responseJson)=> {
  this.setState({
   loading: false,
   details: responseJson
  })
})
.catch(error=>console.log(error)) //to catch the errors if any
}
