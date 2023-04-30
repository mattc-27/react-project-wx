import React from 'react';
import { WiHumidity, WiCloudUp, WiCloudDown } from "react-icons/wi";
import { GiWindTurbine } from "react-icons/gi";
import { BsSunrise, BsSunset } from "react-icons/bs";


function Current({ weather }) {

    const date = new Date();


    return (
        <div className="currentContainer">

            {weather && (
                <>
                    <div className="currentTop">
                        <div className="locationDate">
                            <div className="location">
                                <p>{weather.name}, {weather.region}</p>
                            </div>
                            <div className="date">
                                <p>{date.toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>
                    <div className="currentBottom">
                        <div className="currentLeft">
                            <div className="conditionsLeft">
                                <div className="currentTemp">
                                    <p>{weather.formatIcon.value}</p>
                                    <h2>{weather.temp_f.toFixed()}°F</h2>
                                </div>
                                <div className="currentDesc">
                                    <p>{weather.condition.text} </p>
                                </div>
                            </div>
                        </div>

                        <div className="currentRight">

                            <div className="conditionsRight">
                                <div className="tempHighLow">
                                    <div className="tempHigh">
                                        <WiCloudUp size={40} style={{ color: "white" }} />
                                        <p>{weather.forecastday[0].day.maxtemp_f.toFixed()}°F</p>
                                    </div>
                                    <div className="tempLow">
                                        <WiCloudDown size={40} style={{ color: "white" }} />
                                        <p>{weather.forecastday[0].day.mintemp_f.toFixed()}°F</p>
                                    </div>

                                </div>
                                <div className="tempHighLow">
                                    <div className="tempHigh">
                                        <GiWindTurbine size={40} style={{ color: "white" }} />
                                        <p>{weather.wind_mph}mph</p>
                                    </div>
                                    <div className="tempLow">
                                        <WiHumidity size={40} style={{ color: "white" }} />
                                        <p>{weather.humidity}%</p>
                                    </div>
                                </div>
                                <div className="tempHighLow">
                                    <div className="tempHigh">
                                        <BsSunrise size={40} style={{ color: "white" }} />
                                        <p>{weather.forecastday[0].astro.sunrise}</p>
                                    </div>
                                    <div className="tempLow">
                                        <BsSunset size={40} style={{ color: "white" }} />
                                        <p>{weather.forecastday[0].astro.sunset}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Current;