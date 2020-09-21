export const REQUEST_WEATHER='REQUEST_WEATHER',SUCCESS_WEATHER='SUCCESS_WEATHER';

export const weatherData(city)=>({
type:REQUEST_WEATHER,
payload: {city}

});
