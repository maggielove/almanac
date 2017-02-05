import axios from 'axios';

const WEATHER_API_PATH = 'http://api.wunderground.com/api/';
//TODO: Store keys securely
const WEATHER_API_KEY = '';
//TODO: change to use geolocation
const FORECAST_QUERY = '/forecast/q/NY/New_York.json';

export const getForecast = () => new Promise((resolve, reject) => {
    return axios.post(WEATHER_API_PATH + WEATHER_API_KEY + FORECAST_QUERY)
    .then(function(response){
        resolve(response);
    }).catch(function() {
        reject({ message: 'Hmm, something went wrong.' });
    });
});
