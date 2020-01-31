import React, { useState, useEffect } from "react";
import DisplayDocs from "../components/DisplayDocs";
import LoadingSkeleton from "../util/LoadingSkeleton";
import SortingResults from "../components/SortingResults";

const AllResults = props => {
  const [searchResults, setSearchResults] = useState(null);

  const handleSortingResults = data => {
    setSearchResults(data);
  };

  useEffect(() => {
    setSearchResults(props.searchResults.data);
  }, [props.searchResults]);

  return (
    <div style={{ paddingTop: `30px` }}>
      {searchResults ? (
        <>
          <SortingResults
            searchResults={searchResults}
            handleSortingResults={handleSortingResults}
          />
          <DisplayDocs searchResults={searchResults} />
        </>
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
