import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import NoResults from "./pages/NoResults";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
      <Switch>
          <Route exact path={["/", "/books"]}>
            <Search />
          </Route>
          <Route exact path="/Saved">
            <Saved />
          </Route>
          <Route exact path="/Search">
            <Search />
          </Route>
          <Route>
            <NoResults />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;