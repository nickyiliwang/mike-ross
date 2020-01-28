import React, { useState } from "react";
import "./setup.css";
import "./App.css";
import Search from "./components/Search";
import DisplayDocuments from "./components/DisplayDocuments";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Search />
      <DisplayDocuments />
    </Router>
  );
};

export default App;
