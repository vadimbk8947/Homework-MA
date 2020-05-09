import React from "react";
import { connect } from "react-redux";
import { Spin, Space } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { AppState } from "../..";
import "./Tickets.scss";

interface ITickets {
  tickets: {
    best_prices: [];
    current_depart_date_prices: [];
  };
  loading: boolean;
}

const Tickets: React.FC<ITickets> = ({ tickets, loading }) => {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 50,
        position: "absolute",
        left: "calc(50% - 50px)",
      }}
      spin
    />
  );

  if (loading) {
    return <Spin indicator={antIcon} />;
  }

  return (
    <ul className="list-for-query">
      {tickets.best_prices ? (
        tickets.best_prices ? (
          tickets.best_prices.map((ticket: any, i: number) => (
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
                  Цена: {(ticket.value * 0.37).toFixed(2)} грн
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
  loading: state.appReducer.loading,
});

export default connect(mapStateToProps)(Tickets);
