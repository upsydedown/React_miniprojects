// https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=eff1351d5979089f3d65b9fc25af29a5

import React, { useState, useEffect } from 'react'
import Card from "./WeatherCard.js"
import "./style.css";

const Accuweather = () => {
  const [searchValue, setsearchValue] = useState("delhi");
  const [AccuWeatherInfo, setAccuWeatherInfo] = useState({});
  const getInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=eff1351d5979089f3d65b9fc25af29a5`;
      let response = await fetch(url);
      let weatherData = await response.json();
      const { temp, humidity, pressure, } = weatherData.main;
      const { main: mood } = weatherData.weather[0];
      const { name: city } = weatherData;
      const { speed } = weatherData.wind;
      const { country, sunrise, sunset } = weatherData.sys;

      // converting the fecthed data into an array

      const WeatherInfo = {
        temp, humidity,
        pressure, mood,
        city, speed,
        country, sunrise,
        sunset,
      };

      setAccuWeatherInfo(WeatherInfo);
    } catch (error) {
      alert(error);
    }
  };

  // default value loades each time the page is refreshed

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      <figure className="logo-box">
        <img className='logo' src="" alt="" srcset="" />
      </figure>

      <section className="search" >
        <input type="text" id='search-bar' className='search-bar' autoFocus placeholder='Search Here' value={searchValue} onChange={(event) => setsearchValue(event.target.value)} /><button className="search-btn" onClick={getInfo()}>Search</button>
      </section>
      {/* The Weather Card */}

      <Card {... AccuWeatherInfo}/>
    </>  
  )
};

export default Accuweather;