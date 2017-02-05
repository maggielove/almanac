import React, { Component } from 'react';
import { render } from 'react-dom';
import Today from './components/Today';
import Weather from './components/Weather';

class Almanac extends Component {
    render() {
        return (
            <div>
                <Today />
                <Weather />
            </div>
        )
    }
}

render(<Almanac />, document.getElementById('react-root'));
