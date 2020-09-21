export const REQUEST_WEATHER='REQUEST_WEATHER',SUCCESS_WEATHER='SUCCESS_WEATHER';

export function weatherData(city)
{
return{
type:REQUEST_WEATHER,
payload: {city}
}
}