import React from "react";

import "./CurrentWeatherInfo.scss";

const CurrentWeatherInfo = ({ currentWeatherData: data }) => {
  console.log(data);

  if (!data) {
    return null;
  }

  return (
    <div className="city__wrapper">
      <span className="city__name">
        {data.name === "Chokolivka" ? "Kyiv" : data.name} {data.sys.country}
      </span>
      <span className="city__temperature">
        {(data.main.temp - 273.15).toFixed(2)} &deg;
      </span>
      <span className="city__wind">{data.weather[0].main}</span>
      <span className="city__wind">
        Wind : {data.wind.speed} m/s />
        <b style={{ transform: `rotateZ(${data.wind.deg}deg)` }}>&uarr;</b>
      </span>
    </div>
  );
};

export default CurrentWeatherInfo;
