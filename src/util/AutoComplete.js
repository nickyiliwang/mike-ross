import React, { useState, useEffect } from "react";
import axios from "axios";
import Select, { components } from "react-select";

const Search = () => {
  const [input, setInput] = useState("good faith");
  const [type, setType] = useState("keyword");
  const [suggestions, setSuggestions] = useState([
    { value: "loading", label: "loading" }
  ]);
  const [document, setDocument] = useState("");

  useEffect(() => {
    // componentDidMount
    axios
      .post("http://localhost:4000/search", {
        type: type,
        text: input
      })
      .then(res => {
        const newSuggestions = res.data.documents.map(doc => {
          return {
            label: doc.shortTitle,
            value: doc.title,
            id: doc.id
          };
        });
        console.log(newSuggestions);
        setSuggestions(newSuggestions);
      });
  }, []);

  const handleOnSubmit = e => {
    e.preventDefault();
    console.log("submit");
  };

  const handleOnInputChange = value => {
    console.log(value);
    // setInput(value);

    axios
      .post("http://localhost:4000/search", {
        type: type,
        text: value
      })
      .then(res => {
        const newSuggestions = res.data.documents.map(doc => {
          return {
            label: doc.shortTitle,
            value: doc.title,
            id: doc.id
          };
        });
        console.log(newSuggestions);
        setSuggestions(newSuggestions);
      });
  };

  const handleOnSelectChange = doc => {
    console.log(doc);
    setDocument(doc.value);
  };

  // dropdown
  const handleDropdownOnChange = e => {
    setType(e.target.value);
    console.log(type);
  };

  // using the react-select component we can add a maxLength prop
  const Input = props => <components.Input {...props} maxLength={200} />;

  return (
    <div className="search-bar">
      <Select
        className="search-input"
        onInputChange={value => handleOnInputChange(value)}
        onChange={value => handleOnSelectChange(value)}
        options={suggestions}
        placeholder="good faith"
        components={{ Input }}
      />
      <form onSubmit={handleOnSubmit}>
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

// export default Search;
