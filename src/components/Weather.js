import React, { Component } from 'react';
import { getForecast } from '../utils/getForecast';
import { getNextThreeDays } from '../utils/getDate';

export default class Weather extends Component {
    constructor(props){
        super(props);

        this.state = {
            highs: [],
            lows: [],
            weatherText: [],
            errorMessage: ''
        }

        this.getWeatherToday = this.getWeatherToday.bind(this);
        this.handleSuccess = this.handleSuccess.bind(this);
        this.handleFailure = this.handleFailure.bind(this);
    }

    componentDidMount() {
        this.getWeatherToday();
    }

    getWeatherToday() {
        getForecast()
        .then(this.handleSuccess)
        .catch(this.handleFailure);
    }

    handleSuccess(response) {
        const textForecast = response.data.forecast.txt_forecast;
        const simpleForecast = response.data.forecast.simpleforecast;
        const forecastToday = simpleForecast.forecastday[0];
        const firstThreeDayForecast = simpleForecast.forecastday[1];
        const secondThreeDayForecast = simpleForecast.forecastday[2];
        const thirdThreeDayForecast = simpleForecast.forecastday[3];

        this.setState({
            highs: [ forecastToday.high.fahrenheit, firstThreeDayForecast.high.fahrenheit, secondThreeDayForecast.high.fahrenheit, thirdThreeDayForecast.high.fahrenheit ],
            lows: [ forecastToday.low.fahrenheit, firstThreeDayForecast.low.fahrenheit, secondThreeDayForecast.low.fahrenheit, thirdThreeDayForecast.low.fahrenheit ],
            weatherText: [ textForecast.forecastday[0].fcttext, textForecast.forecastday[1].fcttext, textForecast.forecastday[2].fcttext, textForecast.forecastday[3].fcttext ]
        })
    }

    handleFailure(reason) {
        this.setState({
            errorMessage: reason.message
        })
    }

    render() {
        const { highs, lows, weatherText, errorMessage } = this.state;
        const nextThreeDays = getNextThreeDays();

        return (
            <div className="Weather">
                <div className="Weather Weather--today">
                    {highs[0] && <p>{'High: ' + highs[0] + '°F'}</p>}
                    {lows[0] && <p>{ 'Low: ' +  lows[0] + '°F'}</p>}
                    {weatherText[0] && <p>{weatherText[0]}</p>}
                    {errorMessage && <p>{errorMessage}</p>}
                </div>
                <div className="Weather Weather--three-day">
                    {nextThreeDays[0] && <p>{nextThreeDays[0]}</p>}
                    {highs[1] && <p>{'High: ' + highs[1] + '°F'}</p>}
                    {lows[1] && <p>{ 'Low: ' +  lows[1] + '°F'}</p>}
                    {weatherText[1] && <p>{weatherText[1]}</p>}
                </div>
                <div className="Weather Weather--three-day">
                    {nextThreeDays[1] && <p>{nextThreeDays[1]}</p>}
                    {highs[2] && <p>{'High: ' + highs[2] + '°F'}</p>}
                    {lows[2] && <p>{ 'Low: ' +  lows[2] + '°F'}</p>}
                    {weatherText[2] && <p>{weatherText[2]}</p>}
                </div>
                <div className="Weather Weather--three-day">
                    {nextThreeDays[2] && <p>{nextThreeDays[2]}</p>}
                    {highs[3] && <p>{'High: ' + highs[3] + '°F'}</p>}
                    {lows[3] && <p>{ 'Low: ' +  lows[3] + '°F'}</p>}
                    {weatherText[3] && <p>{weatherText[3]}</p>}
                </div>
            </div>
        );
    }
}
