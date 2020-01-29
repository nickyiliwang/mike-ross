import React, { useState } from "react";
import "./setup.css";
import "./App.css";
import Header from "./components/Header";

import SearchPage from "./pages/search-page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="wrapper">
        <Switch>
          <Route exact path="/">
            <SearchPage />
          </Route>
          <Route path="/results">
            <SearchPage />
          </Route>
          <Route path="/single">
            <SearchPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
