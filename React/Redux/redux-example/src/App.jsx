import React from "react";
import { connect } from "react-redux";

import {
  incrementClickCount,
  decrementClickCount,
} from "./reducer/countReducer";

function App(props) {
  const handleCountClick = (color) => {
    props.incrementClickCount(color);
  };

  return (
    <div className="App">
      <button className="red" onClick={() => handleCountClick("red")}>
        red ({props.redCountClick})
      </button>
      <button className="blue" onClick={() => handleCountClick("blue")}>
        blue ({props.blueCountClick})
      </button>
      <button className="green" onClick={() => handleCountClick("green")}>
        green ({props.greenCountClick})
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  redCountClick: state.countReducer.red,
  blueCountClick: state.countReducer.blue,
  greenCountClick: state.countReducer.green,
});

const mapDispatchToProps = {
  incrementClickCount,
  decrementClickCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
