import React from "react";
import "./City.css";

export default function City() {
  let cityEntered = { city: "New York" };
  return <h1> {cityEntered.city} </h1>;
}
