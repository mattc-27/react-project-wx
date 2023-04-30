import React from 'react';
import '../App.css'

function Forecast ({hour}) {

    return (
    <>
        <div className="hourCard">
        <p>{hour.time}</p>
        <p>{hour.temp_f}°F</p>
        <p>{hour.condition.text}</p>
        </div>
    </>
    );
}

export default Forecast;