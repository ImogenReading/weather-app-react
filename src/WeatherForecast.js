import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
function handleResponse(response) {
    console.log(response.data)
}

let apiKey = `6b93f7db7d89a630dd34ca79b7238880`;
let logitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
let apiUrl = 
`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${logitude}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);
    return (
    <div className="WeatherForecast">
    <div className="row">
        <div className="col">
            <div calssName="WeatherForecast-day">Thu</div>
            🌕
            <div className="WeatherForecase-temperature">
        <span className="WeatherForecast-temperature-min">10</span>
        <span className="WeatherForecast-temperature-max">15</span>

        </div>
        </div>
    </div>
    </div>
)
}