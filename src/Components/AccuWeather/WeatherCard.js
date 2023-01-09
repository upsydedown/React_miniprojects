import React, {useState, useEffect} from 'react';
import "./style.css";

const WeatherCard = ({ temp, humidity,
    pressure, mood,
    city, speed,
    country, sunrise,
    sunset }) => {

    const [weatherState, setweatherState] = useState("");

    useEffect(() => {
        if(mood){
            switch (mood) {
                case "Clouds": setweatherState("wi-day-cloudy");
                break;
                case "Haze": setweatherState("wi-fog");
                break;
                case "Clear": setweatherState("wi-day-sunny");
                break;
                case "Mist": setweatherState("wi-day-sunny");
                break;
            
                default:
                    setweatherState("wi-day-sunny");
                    break;
            }
        }

    }, [mood])
    

    // converting the fetched time which is in seconds

    let morning_sec =sunrise;
    let morning_date =new Date (morning_sec*1000);
    let morning_time = `${morning_date.gethours()}:${morning_date.getminutes()}`;

    let evening_sec =sunset;
    let evening_date =new Date (evening_sec*1000);
    let evening_time = `${evening_date.gethours()}:${evening_date.getminutes()}`;

    return (
        <>

            <section className="main-weather-body">
                <div className="weather-content-box container">
                    <div className="weather-icon">
                        <i className={`wi ${weatherState}`} ></i>
                    </div>

                    <div className="temp-box container">
                        <div className="weather-info-box container">
                            <div className="temperature">{temp}&deg;</div>
                            <div className="location-information">
                                <div className="weather-condition">{mood}</div>
                                <div className="place">{city},{country}</div>
                            </div>
                        </div>
                        <div className="date-time-box container">
                            {new Date().toLocaleString()}
                        </div>
                    </div>

                    <div className="card-info-box">
                        <div className="mini-card container">
                            <div className="mini-icons"><i className={"wi wi-day-sunny"} ></i></div>
                            <div className="location-information">
                                <p>hello</p>
                                <p>hello</p>
                            </div>
                            <div className="mini-icons"><i className={"wi wi-day-sunny"} ></i></div>
                            <div className="location-information">
                                <p>hello</p>
                                <p>hello</p>
                            </div>
                            <div className="mini-icons"><i className={"wi wi-day-sunny"} ></i></div>
                            <div className="location-information">
                                <p>hello</p>
                                <p>hello</p>
                            </div>
                            <div className="mini-icons"><i className={"wi wi-day-sunny"} ></i></div>
                            <div className="location-information">
                                <p>hello</p>
                                <p>hello</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default WeatherCard;