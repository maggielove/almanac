import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class Date extends Component {
    render() {
        const dateClasses = classNames('date');

        return(
            <div className={dateClasses}>
                <p className='date-text'>
                    {'Sunday, January 8, 2017'}
                </p>
            </div>
        )
    }
}
