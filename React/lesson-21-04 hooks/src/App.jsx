import React, { useState, useRef } from "react";
import UseRef from "./Components/UseRef";
import UseRef2 from "./Components/UseRef2";

function App() {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <div className="App">
      <button onClick={() => toggleModal(true)}>show modal</button>
      <UseRef2 hideOnClick={() => toggleModal(false)}>
        <UseRef />
      </UseRef2>
    </div>
  );
}

export default App;
