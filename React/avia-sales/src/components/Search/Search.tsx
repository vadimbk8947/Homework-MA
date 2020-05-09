import React, { useState, useEffect, useRef, useContext } from "react";

import API from "../../api/api";
import "./Search.scss";
import { Context } from "../../Context";
import { connect } from "react-redux";
import {
  getCodeAirportFrom,
  getCodeAirportTo,
  getDepartDate,
} from "../../redux/searchReducer";

interface ISearch {
  getCodeAirportFrom: (id: string | null) => void;
  getCodeAirportTo: (id: string | null) => void;
  getDepartDate: (date: string) => void;
}

const Search: React.FC<ISearch> = ({
  getCodeAirportFrom,
  getCodeAirportTo,
  getDepartDate,
}) => {
  const [values, setValues] = useState<any>({
    citiesFrom: [],
    citiesTo: [],
    codeFrom: "",
    codeTo: "",
    data: "",
  });

  const inputFrom = useRef<any>();
  const inputTo = useRef<any>();

  const { getTicketsByQuery } = useContext(Context);

  useEffect(() => {
    getTicketsByQuery(values.codeFrom, values.codeTo, values.data);
  }, [values.data]);

  const handleOnChange = ({ target }: any) => {
    if (target.value.length) {
      API.getCitiesByQuery(target.value)
        .then((res) =>
          target === inputFrom.current
            ? setValues({ ...values, citiesFrom: res.data })
            : setValues({ ...values, citiesTo: res.data })
        )
        .catch((err) => console.error(err));
    }
  };

  const handleOnClick = ({ target }: any) => {
    const spanFrom = document.querySelector(".wrapper__from__list-item-id");
    const spanTo = document.querySelector(".wrapper__to__list-item-id");

    if (target === document.querySelector(".wrapper__from__list-item")) {
      getCodeAirportFrom(spanFrom!.textContent);
      setValues({ ...values, citiesFrom: [] });

      spanFrom!.textContent = "";
      inputFrom.current.value = target.textContent;
    } else {
      getCodeAirportTo(spanTo!.textContent);
      setValues({ ...values, citiesTo: [] });

      spanTo!.textContent = "";
      inputTo.current.value = target.textContent;
    }
  };

  return (
    <div className="wrapper__search">
      <div className="wrapper__from">
        <input
          ref={inputFrom}
          onChange={handleOnChange}
          type="text"
          className="input wrapper__from-input"
          placeholder="Откуда"
          required
        />
        {values.citiesFrom.length < 12 ? (
          <ul className="wrapper__from__list dropdown">
            {values.citiesFrom.map((city: any, i: number) => (
              <li
                onClick={handleOnClick}
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
          ref={inputTo}
          onChange={handleOnChange}
          type="text"
          className="input wrapper__to-input"
          placeholder="Куда"
        />
        {values.citiesTo.length < 10 ? (
          <ul className="wrapper__to__list dropdown">
            {values.citiesTo.map((city: any, i: number) => (
              <li
                onClick={handleOnClick}
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
          onChange={(e) => getDepartDate(e.target.value)}
          className="input wrapper-date-input"
          placeholder="Отправление"
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  getCodeAirportFrom,
  getCodeAirportTo,
  getDepartDate,
};

export default connect(null, mapDispatchToProps)(Search);
