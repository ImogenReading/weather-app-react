import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

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
    
      <WeatherTemperature celsius={props.data.temperature} />
  
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