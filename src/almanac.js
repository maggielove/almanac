import React from 'react';
import { render } from 'react-dom';
import Today from './components/Today';

class Almanac extends React.Component {
    render() {
        return (
            <Today />
        )
    }
}

render(<Almanac />, document.getElementById('react-root'));
