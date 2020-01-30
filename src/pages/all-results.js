import React, { useState, useEffect } from "react";
import DisplayDocs from "../components/DisplayDocs";
import LoadingSkeleton from "../util/LoadingSkeleton";

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
        <div style={{ paddingTop: `30px` }}>
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
        </div>
      )}
    </div>
  );
};

export default AllResults;
