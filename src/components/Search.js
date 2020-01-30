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
      <form
        style={
          props.center
            ? {
                margin: `30% 0px`
              }
            : {
                background: `#ffffff`,
                margin: `0 auto`,
                maxWidth: `1400px`,
                padding: `20px 10%`,
                boxShadow: `0px 2px 8px rgba(79, 94, 100, 0.1)`
              }
        }
        onSubmit={handleOnSubmit}
      >
        <textarea
          type="text"
          name="text"
          value={input}
          className="search-input"
          onChange={handleOnInputChange}
          maxLength={200}
          style={{
            minHeight: `${input.length / 1.5}px`
          }}
        />

        <select
          onChange={handleDropdownOnChange}
          name="dropdown"
          className="select-dropdown"
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
