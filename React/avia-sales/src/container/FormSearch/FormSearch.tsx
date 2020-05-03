import React, { useState } from "react";
import Search from "../../components/Search/Search";
import "./FormSearch.scss";
import { getTickets } from "../../api/api";

export default function FormSearch() {
  const [state, setState] = useState({
    codeFrom: "",
    codeTo: "",
    date: "",
    ticketsResult: "",
  });

  const updData = (codeFrom, codeTo, date) => {
    return setState({
      ...state,
      codeFrom: codeFrom,
      codeTo: codeTo,
      date: date,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    getTickets(state.codeFrom, state.codeTo, state.date)
      .then((res) => res.json())
      .then(({ current_depart_date_prices }) =>
        setState({ ...state, ticketsResult: current_depart_date_prices })
      )
      .catch(console.error);
  };

  console.log(state.ticketsResult);

  return (
    <>
      <form className="form-search" onSubmit={handleOnSubmit}>
        <Search updData={updData} />
        <div className="wrapper__button-search">
          <button type="submit" className="wrapper__button-search__btn">
            <span className="wrapper__button-search__btn-name">
              Найти билеты
            </span>
          </button>
        </div>
      </form>

      <div className="tickets-result">
        {state.ticketsResult.length ? (
          <ul className="tickets-result__list">
            {state.ticketsResult.map((item, i) => (
              <li key={i} className="tickets-result__list-item">
                {item.gate}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
}
