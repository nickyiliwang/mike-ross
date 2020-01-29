import React from "react";
import SingleDoc from "./SingleDoc";

const DisplayDocs = ({ searchResults }) => {
  const renderSingleDocument = () => {
    return searchResults.documents.map(doc => {
      // shortTitle, date, citation, passages
      const { id, ...restOfDocProps } = doc;
      return (
        <li className="single-doc" key={id}>
          <SingleDoc {...restOfDocProps} />
        </li>
      );
    });
  };

  return (
    <div>
      <h2>Documents</h2>
      <ul className="doc-list">{renderSingleDocument()}</ul>
    </div>
  );
};

export default DisplayDocs;
