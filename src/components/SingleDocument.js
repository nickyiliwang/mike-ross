import React from "react";

const SingleDocument = ({
  shortTitle,
  date,
  courtName,
  citation,
  passages
}) => {
  return (
    <React.Fragment>
      <div className="top-doc">
        <h3>{shortTitle}</h3>
        <p>{courtName}</p>
        <p>{date}</p>
        <p>{citation}</p>
      </div>
      <div className="passages">
        <p>{`1 of ${passages.length} Passages`}</p>
        <p>{passages[0]}</p>
      </div>
    </React.Fragment>
  );
};

export default SingleDocument;
