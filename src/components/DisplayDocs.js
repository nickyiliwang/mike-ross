import React from "react";
import DisplaySingleDoc from "./DisplaySingleDoc";

const DisplayDocs = ({ searchResults }) => {
  const renderSingleDocument = () => {
    if (searchResults.documents[0]) {
      return searchResults.documents.map(doc => {
        const { id, ...restOfDocProps } = doc;
        return (
          <li key={id}>
            <DisplaySingleDoc id={id} {...restOfDocProps} />
          </li>
        );
      });
    } else {
      return (
        <div className='no-results'>
          <p>
            Unfortunately we could not find any results. Please try another
            search.
          </p>
        </div>
      );
    }
  };

  return (
    <div>
      <ul className="doc-list">{renderSingleDocument()}</ul>
    </div>
  );
};

export default DisplayDocs;
