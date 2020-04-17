import React from "react";
import { connect } from "react-redux";

function Footer(props) {
  if (!props.car) return <span>Choose car...</span>;

  return (
    <>
      <h3>Details</h3>
      <img src={props.car.img} />
      <p>Speed: {props.car.speed}</p>
      <p>Price: {props.car.price}</p>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    car: state.active,
  };
};

export default connect(mapStateToProps)(Footer);
