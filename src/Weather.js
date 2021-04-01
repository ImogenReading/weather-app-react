import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import './Weather.css';



export default function Weather(prop) {
  
  const [weatherData, setWeatherData] = useState ({ready: false});
  function handleResponse(response) {
    console.log(response.data)
    setWeatherData({
      ready:true,
      temperature:response.data.main.temp,
      humidity:response.data.main.humidity,
      date: new Date (response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      wind: response.data.wind.speed,
      city:response.data.name

    })
  }

  if (weatherData.ready) {
    return (

    <div>

        <form id="search-form">
        <input
          type="text"
          placeholder="Enter City Name"
          autoComplete="off"
          autoFocus="on"
          aria-describedby="basic-addon2"
          id="search-text-input"
        />

        <input type="submit" value="Search" id="search-button" />
      </form>

      <button id="current-location-button">Current Location</button>

      <h2 className="city"> {weatherData.city} </h2>

      <h5 className="date"> <FormattedDate date={weatherData.date} /> </h5>
    
      <h3 className="text-capitalize" id="weather-description"> {weatherData.description} </h3>

      <img
      src={weatherData.iconUrl}
      alt={weatherData.description}  
      className="weatherIcon"
      />
    

      <br />
      <span className="temperature" id="temperature">
        {Math.round(weatherData.temperature)}
      </span>
      <span className="units">
        <span id="celsius-link" className="active">
          °C
        </span>
        |
        <span id="fahrenheit-link">
          °F
        </span>
      </span>
      <br />
      <span className="humidity" id="humidity">
        Humidity: {weatherData.humidity}%
      </span>
      <span id="divider"> | </span>
      <span className="wind" id="wind">
        Wind: {Math.round(weatherData.wind)}km/h
      </span>
      <br />
    </div>
  );
} else {

  const apiKey = "6b93f7db7d89a630dd34ca79b7238880";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${prop.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";

}
}
