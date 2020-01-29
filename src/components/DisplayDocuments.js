import React from "react";
import SingleDocument from "./SingleDocument";

const DisplayDocuments = props => {
  // renderSingleDocument = () => {
  //   return props.searchResults.documents.map(doc => {
  //     const {} = doc;

  //     return <SingleDocument />;
  //   });
  // };

  return (
    <div>
      <h2>Documents</h2>
      <div>{console.log(props.searchResult)}</div>
    </div>
  );
};

export default DisplayDocuments;
