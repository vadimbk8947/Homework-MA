import React, { useState, useEffect } from "react";
import "./Search.scss";
import { getCitiesByQuery } from "../../api/api";

export default function Search({ updData }) {
  const [values, setValues] = useState({
    citiesFrom: [],
    citiesTo: [],
    filterCities: [],
    query: "",
    codeFrom: "",
    codeTo: "",
    data: "",
  });

  const handleOnChange = ({ target }) => {
    if (target.value.length) {
      getCitiesByQuery(target.value)
        .then((res) => res.json())
        .then((data) =>
          target === document.querySelector(".wrapper__from-input")
            ? setValues({ ...values, citiesFrom: data })
            : setValues({ ...values, citiesTo: data })
        )
        .catch(console.error);
    }
  };

  const handleOnClickFrom = ({ target }) => {
    const inputForm = document.querySelector(".wrapper__from-input");
    const spanFrom = document.querySelector(".wrapper__from__list-item-id");

    setValues({ ...values, codeFrom: spanFrom.textContent, citiesFrom: [] });
    spanFrom.textContent = "";
    return (inputForm.value = target.textContent);
  };

  const handleOnClickTo = ({ target }) => {
    const inputTo = document.querySelector(".wrapper__to-input");
    const spanTo = document.querySelector(".wrapper__to__list-item-id");

    setValues({ ...values, codeTo: spanTo.textContent, citiesTo: [] });
    spanTo.textContent = "";
    return (inputTo.value = target.textContent);
  };

  useEffect(() => {
    updData(values.codeFrom, values.codeTo, values.data);
  }, [values.data]);

  return (
    <div className="wrapper__search">
      <div className="wrapper__from">
        <input
          onChange={handleOnChange}
          type="text"
          className="input wrapper__from-input"
          placeholder="Откуда"
          required
        />
        {values.citiesFrom.length < 10 ? (
          <ul className="wrapper__from__list dropdown">
            {values.citiesFrom.map((city, i) => (
              <li
                onClick={handleOnClickFrom}
                key={i}
                className="wrapper__from__list-item"
              >
                {city.name + ", " + city.country_name}
                <span className="wrapper__from__list-item-id">{city.code}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="wrapper__to">
        <input
          onChange={handleOnChange}
          type="text"
          className="input wrapper__to-input"
          placeholder="Куда"
        />
        {values.citiesTo.length < 10 ? (
          <ul className="wrapper__to__list dropdown">
            {values.citiesTo.map((city, i) => (
              <li
                onClick={handleOnClickTo}
                key={i}
                className="wrapper__to__list-item"
              >
                {city.name + ", " + city.country_name}
                <span className="wrapper__to__list-item-id">{city.code}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="wrapper-date">
        <input
          type="date"
          onChange={(e) => setValues({ ...values, data: e.target.value })}
          className="input wrapper-date-input"
          placeholder="Отправление"
        />
      </div>
    </div>
  );
}
