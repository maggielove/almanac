import React from 'react';
import { render } from 'react-dom';
import Date from './components/Date';

class Almanac extends React.Component {
    render() {
        return (
            <Date />
        )
    }
}

render(<Almanac />, document.getElementById('react-root'));
