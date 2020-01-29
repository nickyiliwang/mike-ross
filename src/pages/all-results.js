import React, { useState, useEffect } from "react";
import DisplayDocuments from "../components/DisplayDocuments";

const AllResults = props => {
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    setSearchResults(props.searchResults.data);
  });

  return (
    <div>
      {searchResults ? (
        <DisplayDocuments searchResults={searchResults} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default AllResults;
