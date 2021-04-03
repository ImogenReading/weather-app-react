import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return(
        <div className="WeatherInfo">

            <h2 className="city"> {props.data.city} </h2>

      <h5 className="date"> <FormattedDate date={props.data.date} /> </h5>
    
      <h3 className="text-capitalize" id="weather-description"> {props.data.description} </h3>

      <img
      src={props.data.iconUrl}
      alt={props.data.description}  
      className="weatherIcon"
      />
    

      <br />
      <span className="temperature" id="temperature">
        {Math.round(props.data.temperature)}
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
        Humidity: {props.data.humidity}%
      </span>
      <span id="divider"> | </span>
      <span className="wind" id="wind">
        Wind: {Math.round(props.data.wind)}km/h
      </span>
      <br />

        </div>
    );
}