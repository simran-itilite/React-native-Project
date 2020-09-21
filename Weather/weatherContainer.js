import { connect } from 'react-redux';
import weatherComponent from'../component/weatherComponent';
import { weatherData } from '../actions/actionIndex';

const mapStateToProps = (state) => {
return{
weather: state.weather_reducer
}
};
const mapDispatchToProps = (dispatch) => {
return{
onSuccessWeather:() => {
dispatch(weatherData());
}
};
}


const WeatherContainer = connect(mapStateToProps,mapDispatchToProps)(weatherComponent);
export default WeatherContainer;