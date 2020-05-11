import React from "react";
import "./SavedCities.scss";

import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

import mapKey from "../../secret/mapKey";

function SavedCities({ data, currentWeatherData, ...props }) {
  const handleOnClick = city => {
    props.getWeatherByCoords(city.lat, city.lon);
  };

  return (
    <>
      <ul className="saved-wrap">
        {data.map((city, i) => {
          return (
            <li
              className="saved-wrap__item"
              key={i}
              onClick={() => handleOnClick(city)}
            >
              {city.name}
            </li>
          );
        })}
      </ul>

      <Map
        google={props.google}
        zoom={14}
        initialCenter={{
          lat: currentWeatherData.coord.lat,
          lng: currentWeatherData.coord.lon
        }}
        center={{
          lat: currentWeatherData.coord.lat,
          lng: currentWeatherData.coord.lon
        }}
      >
        <Marker
          name={"Current location"}
          position={{
            lat: currentWeatherData.coord.lat,
            lng: currentWeatherData.coord.lon
          }}
        />
      </Map>
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: mapKey
})(SavedCities);
