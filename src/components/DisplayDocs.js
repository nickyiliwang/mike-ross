import React from "react";
import DisplaySingleDoc from "./DisplaySingleDoc";

const DisplayDocs = ({ searchResults }) => {
  const renderSingleDocument = () => {
    if (searchResults.documents[0]) {
      return searchResults.documents.map(doc => {
        const { id, ...restOfDocProps } = doc;
        return (
          <li className="single-doc" key={id}>
            <DisplaySingleDoc id={id} isCarousel={true} {...restOfDocProps} />
          </li>
        );
      });
    } else {
      return (
        <div>
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
      <h2>Documents</h2>
      <ul className="doc-list">{renderSingleDocument()}</ul>
    </div>
  );
};

export default DisplayDocs;
