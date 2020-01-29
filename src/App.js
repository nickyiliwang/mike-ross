import React, { useState } from "react";
import "./setup.css";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import DisplayDocuments from "./components/DisplayDocuments";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Switch>
          <Route exact path="/">
            <Search />
            <DisplayDocuments />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
