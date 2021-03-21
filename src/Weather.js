import React from "react";


export default function Weather() {
  return (
    <div>
    
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
