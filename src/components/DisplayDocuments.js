import React from "react";
import SingleDocument from "./SingleDocument";

const DisplayDocuments = props => {
  const renderSingleDocument = () => {
    return props.searchResults.documents.map(doc => {
      // shortTitle, date, citation, passages
      const { id, ...restOfDocProps } = doc;
      return (
        <li className="single-doc" key={id}>
          <SingleDocument {...restOfDocProps} />
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

export default DisplayDocuments;
