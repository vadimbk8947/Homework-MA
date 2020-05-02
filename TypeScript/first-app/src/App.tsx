import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { Navbar } from "./components/NavBar";
import { TodosPage } from "./pages/TodosPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodosPage} path="/" exact />
          <Route component={AboutPage} path="/about" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
