import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import './Weather.css';



export default function Weather(props) {
  
  const [weatherData, setWeatherData] = useState ({ready: false});
  const [city, setCity] = useState (props.defaultCity);
  function handleResponse(response) {
    console.log(response.data)
    setWeatherData({
      ready:true,
      coordinates: response.data.coord,
      temperature:response.data.main.temp,
      humidity:response.data.main.humidity,
      date: new Date (response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city:response.data.name

    })
  }

  function search(){
    const apiKey = "6b93f7db7d89a630dd34ca79b7238880";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
    event.preventDefault();
    search ();
  }

  function handleCityChange(event){
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
    <div>
        <form onSubmit={handleSubmit} id="search-form">
        <input
          type="text"
          placeholder="Enter City Name"
          autoComplete="off"
          autoFocus="on"
          aria-describedby="basic-addon2"
          id="search-text-input"
          onChange={handleCityChange}
        />

        <input type="submit" value="Search" id="search-button" />
      </form>

      <br />

      <WeatherInfo data={weatherData}/>
      <WeatherForecast coordinates={weatherData.coordinates}/>

    </div>
  );
} else {

  search();
  return "Loading...";

}
}
