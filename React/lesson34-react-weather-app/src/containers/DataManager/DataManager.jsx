import React, { useEffect, useState } from "react";
import "./DataManager.scss";

import getCurrentPosition from "../../utils/getCurrentPosition";
import { getDataByCoords } from "../../api/api";

import CurrentWeatherInfo from "../../components/CurrentWeatherInfo/CurrentWeatherInfo";
import CitySearcher from "../CitySearcher/CitySearcher";
import SavedCities from "../../components/SavedCities/SavedCities";

const savedCitiesFromLS = JSON.parse(localStorage.getItem("savedCities"));

const DataManager = () => {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [savedCities, setSavedCities] = useState(savedCitiesFromLS || []);

  useEffect(() => {
    getCurrentPosition(res => {
      getDataByCoords(res.coords.latitude, res.coords.longitude)
        .then(res => res.json())
        .then(data => setCurrentWeatherData(data))
        .catch(err => console.error(err));
    });
  }, []);

  const getWeatherByCoords = (lat, lon) => {
    getDataByCoords(lat, lon)
      .then(res => res.json())
      .then(data => setCurrentWeatherData(data))
      .catch(err => console.error(err));
  };

  const handleOnSave = () => {
    let data = JSON.parse(localStorage.getItem("savedCities"));
    const isInArray =
      data && data.length
        ? data.some(city => city.id === currentWeatherData.id)
        : false;

    if (!isInArray) {
      setSavedCities([
        ...savedCities,
        {
          lat: currentWeatherData.coord.lat,
          lon: currentWeatherData.coord.lon,
          name: currentWeatherData.name
        }
      ]);

      localStorage.setItem(
        "savedCities",
        JSON.stringify([
          ...savedCities,
          {
            lat: currentWeatherData.coord.lat,
            lon: currentWeatherData.coord.lon,
            name: currentWeatherData.name,
            id: currentWeatherData.id
          }
        ])
      );
    }
  };

  const toggleCityList = () => {
    const menuBtn = document.querySelector(".header__menu-btn");
    const savedWrap = document.querySelector(".saved-wrap");

    menuBtn.classList.toggle("menu-btn__active");
    savedWrap.style.display = "flex";
    savedWrap.style.transform = "translateX(-240px)";
  };

  return (
    <>
      <header className="header">
        <CitySearcher getWeatherByCoords={getWeatherByCoords} />
        <button className="header__save btn" onClick={handleOnSave}>
          Save
        </button>

        <div className="header__menu-btn">
          <a className="header__menu-btn-link" onClick={toggleCityList}>
            <span></span>
          </a>
        </div>
      </header>

      <CurrentWeatherInfo currentWeatherData={currentWeatherData} />
      {currentWeatherData && (
        <SavedCities
          getWeatherByCoords={getWeatherByCoords}
          data={savedCities}
          currentWeatherData={currentWeatherData}
        />
      )}
    </>
  );
};

export default DataManager;
