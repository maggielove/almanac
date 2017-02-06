import axios from 'axios';

let WEATHER_API_KEY;
const WEATHER_API_PATH = 'http://api.wunderground.com/api/';
//TODO: change to use geolocation
const FORECAST_QUERY = '/forecast/q/NY/New_York.json';

const getKeys = () => new Promise((resolve, reject) => {
    // console.log('getting keeyss');
    return axios.get('/keys')
    .then((res) => {
        console.log('res from hitting /keys ', res);
        WEATHER_API_KEY = res;
    }).catch((err) => {
        console.log('error!! ', err);
    })
});

export const getForecast = () => new Promise((resolve, reject) => {
    getKeys()
        .then((res) => {
            console.log('res ' + res);
        })
        // return axios.post(WEATHER_API_PATH + WEATHER_API_KEY + FORECAST_QUERY)
        // .then(function(response){
        //     resolve(response);
        // }).catch(function() {
        //     reject({ message: 'Hmm, something went wrong.' });
        // });
});
