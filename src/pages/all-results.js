import React, { useState, useEffect } from "react";
import DisplayDocs from "../components/DisplayDocs";

const AllResults = props => {
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    setSearchResults(props.searchResults.data);
  });

  return (
    <div>
      {searchResults ? (
        <DisplayDocs searchResults={searchResults} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default AllResults;
