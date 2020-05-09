import React, { useRef } from "react";
import { connect } from "react-redux";

import Search from "../../components/Search/Search";
import { getTicketsByQuery } from "../../redux/ticketsReducer";
import { Context } from "../../Context";
import { AppState } from "../..";
import "./FormSearch.scss";

interface IFormSearch {
  getTicketsByQuery: (codeFrom: string, codeTo: string, date: string) => void;
  codeFrom: string;
  codeTo: string;
  date: string;
}

const FormSearch: React.FC<IFormSearch> = ({
  getTicketsByQuery,
  codeFrom,
  codeTo,
  date,
}) => {
  const handleOnSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    getTicketsByQuery(codeFrom, codeTo, date);
  };

  //animation button plane
  const plane = useRef<any>();

  const handleOnClick = () => {
    plane.current!.classList.toggle("active");
    setTimeout(() => {
      plane.current!.classList.toggle("active");
    }, 2000);
  };

  return (
    <Context.Provider value={{ getTicketsByQuery }}>
      <form className="form-search" onSubmit={(e) => handleOnSubmit(e)}>
        <Search />
        <div className="wrapper__button-search">
          <button
            onClick={handleOnClick}
            type="submit"
            className="wrapper__button-search__btn"
          >
            <span className="wrapper__button-search__btn-name">
              Найти билеты
            </span>
            <span
              ref={plane}
              className="wrapper__button-search__btn-plane"
            ></span>
          </button>
        </div>
      </form>
    </Context.Provider>
  );
};

const mapStateToProps = (state: AppState) => ({
  codeFrom: state.searchReducer.codeFrom,
  codeTo: state.searchReducer.codeTo,
  date: state.searchReducer.date,
});

const mapDispatchToProps = {
  getTicketsByQuery,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormSearch);
