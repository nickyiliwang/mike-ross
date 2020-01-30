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
    <div className="list-of-documents">
      <div className="list-top-doc">
        <h3>{shortTitle}</h3>
        <div className="meta-text">
          <p>{courtName}</p>
          <p>{date}</p>
          <p>{citation}</p>
        </div>
      </div>
      <div className="wrapper list-passages">
        <DocCarousel id={id} passages={passages} />
      </div>
    </div>
  );
};

export default DisplaySingleDoc;
