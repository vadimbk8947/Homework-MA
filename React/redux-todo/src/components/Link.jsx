import React from "react";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../store/actions/actions";

const Link = ({ active, onClick, children }) => (
  <button onClick={onClick} disabled={active} style={{ marginLeft: "4px" }}>
    {children}
  </button>
);

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const matchDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(mapStateToProps, matchDispatchToProps)(Link);
