import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AdContainer from "./AdContainer";

function App() {
  const [counter, setCounter] = useState(0);
  const [isShowAd, setIsShowAd] = useState(true);

  const handleOnClick = () => {
    setCounter(counter + 1);
  };

  const handleOnClickNegative = () => {
    setCounter(counter - 1);
  };

  const handleOnClickReset = () => {
    setCounter(0);
  };

  return (
    <div className="App">
      <span className="span">Hellos world</span>

      <button className="btn" onClick={handleOnClick}>
        Click me
      </button>

      <button className="btn" onClick={handleOnClickNegative}>
        Click me
      </button>

      <button className="btn" onClick={handleOnClickReset}>
        Reset counter
      </button>

      <div className="counter">count of clicks: {counter}</div>

      <AdContainer />
    </div>
  );
}

export default App;
