import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
    return(
        <div className="WeatherInfo">

            <h2 className="city"> {props.data.city} </h2>

      <h5 className="date"> <FormattedDate date={props.data.date} /> </h5>
    
      <h3 className="text-capitalize" id="weather-description"> {props.data.description} </h3>

    
              <WeatherIcon code={props.data.icon} size={52} />
            
    
      <WeatherTemperature celsius={props.data.temperature} />

  
      <span className="humidity" id="humidity">
        Humidity: <strong>{props.data.humidity}%</strong>
      </span>
      <span id="divider"> | </span>
      <span className="wind" id="wind">
        Wind: <strong>{Math.round(props.data.wind)}km/h</strong>
      </span>
      <br />


        </div>
    );
}