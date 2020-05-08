import React from "react";

import FormSearch from "./container/FormSearch/FormSearch";
import Tickets from "./container/Tickets/Tickets";
import "./App.scss";

const App: React.FC = () => {
  return (
    <section className="wrapper">
      <FormSearch />
      <Tickets />
    </section>
  );
};

export default App;
