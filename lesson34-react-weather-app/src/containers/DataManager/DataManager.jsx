import React, { useEffect, useState } from "react";

import getCurrentPosition from "../../utils/getCurrentPosition";
import { getDataByCoords } from "../../api/app";
import WeatherYourCity from "../../components/WeatherYourCity";

const DataManager = () => {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);

  useEffect(() => {
    getCurrentPosition(res => {
      getDataByCoords(res.coords.latitude, res.coords.longitude)
        .then(res => res.json())
        .then(data => setCurrentWeatherData(data))
        .catch(err => console.error(err));
    });
  }, []);

  return (
    <div>
      {currentWeatherData ? (
        <WeatherYourCity info={currentWeatherData} />
      ) : null}
    </div>
  );
};

export default DataManager;
