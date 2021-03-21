import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div>
      {" "}
      <h3 id="weather-description">Sunshine and light wind </h3>
      
      <br />
      <span className="temperature" id="temperature">
        10
      </span>
      <span className="units">
        <a href="/" id="celsius-link" className="active">
          °C
        </a>{" "}
        |
        <a href="/" id="fahrenheit-link">
          °F
        </a>
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
