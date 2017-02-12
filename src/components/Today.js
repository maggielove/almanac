import React, { PropTypes } from 'react';
import { getDateToday } from '../utils/getDate';

const Today = () => {
    const fullDate = getDateToday();

    return(
        <div className="date-main">
        {fullDate}
        </div>
    );
};

export default Today;
