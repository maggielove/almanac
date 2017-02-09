import React, { PropTypes } from 'react';

const Today = () => {
    let date, weekDayNumber, weekday, monthNumber, month, day, year, fullDate;

    date = new Date();
    weekDayNumber = date.getDay();
    monthNumber = date.getMonth();
    day = date.getDate();
    year = date.getFullYear();

    const getWeekday = () => {
        console.log('weekday ', weekDayNumber);
        switch (weekDayNumber) {
            case 0:
                weekday = 'Monday';
                break;
            case 1:
                weekday = 'Tuesday';
                break;
            case 2:
                weekday = 'Wednesday';
                break;
            case 3:
                weekday = 'Thursday';
                break;
            case 4:
                weekday = 'Friday';
                break;
            case 5:
                weekday = 'Saturday';
                break;
            case 6:
                weekday = 'Sunday';
                break;
        }
    }

    const getMonth = () => {
        switch (monthNumber) {
            case 0:
                month = 'January';
                break;
            case 1:
                month = 'February';
                break;
            case 2:
                month = 'March';
                break;
            case 3:
                month = 'April';
                break;
            case 4:
                month = 'May';
                break;
            case 5:
                month = 'June';
                break;
            case 6:
                month = 'July';
                break;
            case 7:
                month = 'August';
                break;
            case 8:
                month = 'September';
                break;
            case 9:
                month = 'October';
                break;
            case 10:
                month = 'November';
                break;
            case 11:
                month = 'December';
                break;
        }
    }

    getWeekday();
    getMonth();

    fullDate = weekday + ', ' + month + ' ' + day + ', ' + year;

    return(
        <div className="date-main">
        {fullDate}
        </div>
    );
};

export default Today;
