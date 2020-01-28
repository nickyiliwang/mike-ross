import React, {useState} from "react";

const Search = () => {

    const [input, setInput] = useState('');
    const [type, setType] = useState('keyword');

    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log('suibmit')
    }

    const handleOnChange = () => {



    }

    const handleSelectOnChange =(e) => {
        setType(e.target.value)
        console.log(type)

    }


  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input onChange={handleOnChange} />
        <select onChange={handleSelectOnChange} name="search-type" className="search-type">
          <option value="keyword">
            Keyword
          </option>
          <option value="citation">Citation</option>
        </select>
        <input type="submit" className="submit" />
      </form>
    </div>
  );
};

export default Search;
