import React, { Component } from 'react';
import { getForecast } from '../utils/getForecast';

export default class Weather extends Component {
    constructor(props){
        super(props);

        this.state = {
            highToday: '',
            lowToday: '',
            weatherTodayText: '',
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
        this.setState({
            highToday: response.data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
            lowToday: response.data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
            weatherTodayText: response.data.forecast.txt_forecast.forecastday[0].fcttext
        })
    }

    handleFailure(reason) {
        this.setState({
            errorMessage: reason.message
        })
    }

    render() {
        const { highToday, lowToday, weatherTodayText, errorMessage } = this.state;
        return (
            <div className="weather">
                {highToday && <p>{'High: ' + highToday + '°F'}</p>}
                {lowToday && <p>{ 'Low: ' +  lowToday + '°F'}</p>}
                {weatherTodayText && <p>{weatherTodayText}</p>}
                {errorMessage && <p>{errorMessage}</p>}
            </div>
        );
    }
}
