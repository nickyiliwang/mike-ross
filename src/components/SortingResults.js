import React from "react";

const SortingResults = ({ searchResults, handleSortingResults }) => {
  const handleOnChange = e => {
    if (searchResults.hasOwnProperty("documents")) {
      if (e.target.value === "alpha") {
        const sortedAlphaResults = searchResults.documents.sort((a, b) =>
          a.title.localeCompare(b.title)
        );

        handleSortingResults(sortedAlphaResults);
      } else {
        const sortedRecentResults = searchResults.documents.sort((a, b) => {
          // turns str into dates, and then subtract them
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
