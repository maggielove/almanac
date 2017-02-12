import React, { PropTypes } from 'react';
import { getDateToday } from '../utils/getDate';
import '../stylesheets/Today.scss';

const Today = () => {
    const fullDate = getDateToday();

    return(
        <div className="Date">
        {fullDate}
        </div>
    );
};

export default Today;
