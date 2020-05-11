import React from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import NewPost from "./pages/NewPost/NewPost";
import SelectedPost from "./pages/SelectedPost";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={NewPost} path="/posts/new" />
        <Route component={SelectedPost} path={"/posts/:postId"} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
