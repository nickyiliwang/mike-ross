import React from "react";
import DocCarousel from "./DocCarousel";

const DisplaySingleDoc = ({
  id,
  shortTitle,
  date,
  courtName,
  citation,
  passages
}) => {
  return (
    <React.Fragment>
      <div className="list-top-doc">
        <h3>{shortTitle}</h3>
        <p>{courtName}</p>
        <p>{date}</p>
        <p>{citation}</p>
      </div>
      <div className="list-passages">
        <DocCarousel id={id} passages={passages} />
      </div>
    </React.Fragment>
  );
};

export default DisplaySingleDoc;
