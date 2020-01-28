import React, { useState } from "react";
import axios from "axios";

const Search = props => {
  const [input, setInput] = useState("");
  const [type, setType] = useState("keyword");

  const handleOnSubmit = e => {
    e.preventDefault();
    console.log("submitted");
    axios
      .post("http://localhost:4000/search", {
        type: type,
        text: input
      })
      .then(res => {
        console.log(res);
      });
    setInput("");
  };

  const handleOnInputChange = e => {
    setInput(e.target.value);
  };

  const handleDropdownOnChange = e => {
    setType(e.target.value);
    console.log(type);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleOnSubmit}>
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
          name="search-type"
          className="search-type"
        >
          <option value="keyword">Keyword</option>
          <option value="citation">Citation</option>
        </select>
        <input type="submit" className="submit" />
      </form>
    </div>
  );
};

export default Search;
