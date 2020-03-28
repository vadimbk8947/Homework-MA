import React from "react";

import scss from "./WeatherYourCity.scss";
import WindDirection from "./WindDirection";

export default function WeatherYourCity(props) {
  let data = props.info;
  console.log(data);

  return (
    <div className="city__wrapper">
      <span className="city__name">
        {data.name === "Chokolivka" ? "Kyiv" : data.name} {data.sys.country}
      </span>
      <span className="city__temperature">
        {(data.main.temp - 273.15).toFixed(2) + " °"}
      </span>
      <span className="city__wind">{data.weather[0].main}</span>
      <span className="city__wind">
        Wind : {data.wind.speed} m/s <WindDirection data={data} />
      </span>
    </div>
  );
}
