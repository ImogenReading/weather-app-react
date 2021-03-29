import React from "react";
import './Weather.css';



export default function Weather() {
  return (

    <div>

        <form id="search-form">
        <input
          type="text"
          placeholder="Enter City Name"
          autocomplete="off"
          autofocus="on"
          aria-describedby="basic-addon2"
          id="search-text-input"
        />

        <input type="submit" value="Search" id="search-button" />
      </form>

      <button id="current-location-button">Current Location</button>

      <h2> New York </h2>
    
      <h3 id="weather-description">Sunshine and light wind </h3>

      <h1>
          🌕
      </h1>
    

      <br />
      <span className="temperature" id="temperature">
        10
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
        Humidity: 10%
      </span>
      <span id="divider">|</span>
      <span className="wind" id="wind">
        Wind: 10mph
      </span>
      <br />
    </div>
  );
 
}
