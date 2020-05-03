import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { select } from "../store/actions/action";

function Header(props) {
  return (
    <>
      <h2>Cars</h2>
      <ol>
        {props.cars.map((car) => {
          return (
            <li
              onClick={() => {
                props.select(car);
              }}
              key={car.id}
            >
              {car.name}
            </li>
          );
        })}
      </ol>
    </>
  );
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ select: select }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    cars: state.cars,
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(Header);
