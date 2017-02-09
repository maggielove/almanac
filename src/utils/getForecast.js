import axios from 'axios';

let WEATHER_API_KEY;
const WEATHER_API_PATH = 'http://api.wunderground.com/api/';
//TODO: change to use geolocation
const FORECAST_QUERY = '/forecast/q/NY/New_York.json';

const hitWeatherApi = (key) => new Promise((resolve, reject) => {
    return axios.get(WEATHER_API_PATH + key + FORECAST_QUERY)
        .then((res) => {
            resolve(res);
        }).catch(() => {
            reject({ message: 'Hmm, something went wrong.' });
        })
});

export const getForecast = () => {
    return axios.get('/keys')
        .then((res) => {
            WEATHER_API_KEY = res.data;
            return hitWeatherApi(WEATHER_API_KEY);
        }).catch((err) => {
            console.log('error: ', err);
        })
}
