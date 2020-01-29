import React from "react";
import DocCarousel from "./DocCarousel";

const SingleDoc = ({ id, shortTitle, date, courtName, citation, passages }) => {
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
        <DocCarousel id={id} passages={passages} />
      </div>
    </React.Fragment>
  );
};

export default SingleDoc;
