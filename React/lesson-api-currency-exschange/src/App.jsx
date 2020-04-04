import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Calculator from "./pages/Calculator/Calculator";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
            <li>
              <button>Log out</button>
            </li>
          </ul>
        </header>

        <hr />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/calculator" component={Calculator} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
