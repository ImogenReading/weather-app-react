import React from "react";


export default function Search(props) {
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
    </div>
  );

}