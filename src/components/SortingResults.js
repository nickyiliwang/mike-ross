import React from "react";

const SortingResults = ({ searchResults, handleSortingResults }) => {
  const handleOnChange = e => {
    console.log("triggered select", searchResults);
    if (searchResults.hasOwnProperty("documents")) {
      if (e.target.value === "alpha") {
        searchResults(handleSortingResults);
      } else {
        const sortedRecentResults = searchResults.documents.sort((a, b) => {
          // Turn your strings into dates, and then subtract them
          // to get a value that is either negative, positive, or zero.
          return new Date(b.date) - new Date(a.date);
        });
        handleSortingResults(sortedRecentResults);
      }
    }
  };

  return (
    <div className="sorting-results">
      <select onChange={handleOnChange}>
        <option value="alpha">Alphabetical</option>
        <option value="recent">Recent</option>
      </select>
    </div>
  );
};

export default SortingResults;
