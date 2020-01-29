import React, { useState, useEffect } from "react";
import DisplayDocuments from "../components/DisplayDocuments";

const AllResults = props => {
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    setSearchResults(props.searchResults.data);
    console.log(searchResults)
  });

  return (
    <div>
      {searchResults ? (
        <DisplayDocuments />
        // <DisplayDocuments searchResults={searchResults} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default AllResults;
