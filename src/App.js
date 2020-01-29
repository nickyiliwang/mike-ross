import React, { useState } from "react";
import "./setup.css";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
// pages
import AllResultsPage from "./pages/all-results";
import SingleResultPage from "./pages/single-doc";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const onSearchTermSubmit = res => {
    setSearchResults(res);
  };

  return (
    <Router>
      <Header />
      <div className="wrapper">
        <Switch>
          <Route exact path="/">
            <Search onSearchTermSubmit={onSearchTermSubmit} />
          </Route>
          <Route path="/results">
            <Search onSearchTermSubmit={onSearchTermSubmit} />
            <AllResultsPage searchResults={searchResults} />
          </Route>
          <Route path="/doc/:id">
            <SingleResultPage searchResults={searchResults} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
