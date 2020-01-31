import React, { useState } from "react";
// css
import "./styles/styles.scss";
// components
import Header from "./components/Header";
import Search from "./components/Search";
// pages
import AllResultsPage from "./pages/all-results";
import SingleDocPage from "./pages/single-doc";
// router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const onSearchTermSubmit = res => {
    const sortedAlphaResults = res.data.documents
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title));

    const originalStructure = { data: { documents: sortedAlphaResults } };
    setSearchResults(originalStructure);
  };

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <div className="wrapper">
            <Search center={true} onSearchTermSubmit={onSearchTermSubmit} />
          </div>
        </Route>
        <Route path="/results">
          <Search center={false} onSearchTermSubmit={onSearchTermSubmit} />
          <div className="wrapper">
            <AllResultsPage searchResults={searchResults} />
          </div>
        </Route>
        <Route path="/doc/:id">
          <SingleDocPage searchResults={searchResults} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
