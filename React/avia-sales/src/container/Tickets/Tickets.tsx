import React from "react";
import { connect } from "react-redux";

import { AppState } from "../..";
import "./Tickets.scss";

interface ITickets {
  tickets: {
    best_prices: [];
    current_depart_date_prices: [];
  };
}

const Tickets: React.FC<ITickets> = ({ tickets }) => {
  console.log(tickets);

  return (
    <ul className="list-for-query">
      {tickets.best_prices ? (
        tickets.current_depart_date_prices ? (
          tickets.current_depart_date_prices.map((ticket: any, i: number) => (
            <li key={i} className="list-for-query__item">
              <div className="list-for-query-background"></div>
              <div className="list-for-query__item-title">{ticket.gate}</div>

              <ul className="list-for-query__item-body">
                <ul className="list-for-query__item-body-route">
                  <li className="list-for-query__item-body-route__origin">
                    {ticket.origin}
                  </li>
                  <li className="list-for-query__item-body-route__destination">
                    {ticket.destination}
                  </li>
                </ul>

                <li className="list-for-query__item-body-distance">
                  Расстояние: {ticket.distance} км
                </li>

                <li className="list-for-query__item-body-changes">
                  Количество пересадок: {ticket.number_of_changes}
                </li>

                <li className="list-for-query__item-body-price">
                  Цена: {ticket.value * 0.37} грн
                </li>
              </ul>

              <button className="list-for-query__item-button">Купить</button>
            </li>
          ))
        ) : (
          <div className="not-found">
            <div className="not-found-answer">No results for this request</div>
            <div className="not-found-question">Show other results?</div>
          </div>
        )
      ) : null}
    </ul>
  );
};

const mapStateToProps = (state: AppState) => ({
  tickets: state.ticketsReducer.tickets,
});

export default connect(mapStateToProps)(Tickets);
