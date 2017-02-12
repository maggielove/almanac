import React, { Component } from 'react';
import { render } from 'react-dom';
import Today from './components/Today';
import Weather from './components/Weather';
import './stylesheets/Almanac.scss';

class Almanac extends Component {
    render() {
        return (
            <div>
                <p className="Title">{'Almanac'}</p>
                <Today />
                <Weather />
            </div>
        )
    }
}

render(<Almanac />, document.getElementById('react-root'));
