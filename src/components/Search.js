import React, { useState } from "react";
import axios from "axios";
import SearchIcon from "../icons/search.svg";
import { withRouter } from "react-router-dom";

const Search = props => {
  const [input, setInput] = useState("");
  const [type, setType] = useState("keyword");

  const handleOnSubmit = e => {
    e.preventDefault();
    if (input === "") return;

    axios
      .post("http://localhost:4000/search", {
        type: type,
        text: input
      })
      .then(res => {
        props.onSearchTermSubmit(res);
      });

    setInput("");
    props.history.push(`/results`);
  };

  const handleOnInputChange = e => {
    setInput(e.target.value);
  };

  const handleDropdownOnChange = e => {
    setType(e.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleOnSubmit}>
        {/* consider using textarea */}
        <input
          type="text"
          name="text"
          value={input}
          className="text-input"
          onChange={handleOnInputChange}
          maxLength={200}
        />

        <select
          onChange={handleDropdownOnChange}
          name="dropdown"
          className="dropdown"
        >
          <option value="keyword">Keyword</option>
          <option value="citation">Citation</option>
        </select>

        <label>
          <input className="search-submit" type="submit" value="" />
          <img className="search-submit-icon" src={SearchIcon} />
        </label>
      </form>
    </div>
  );
};

export default withRouter(Search);
