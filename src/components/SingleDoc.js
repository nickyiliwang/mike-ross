import React from "react";
import DocCarousel from "./DocCarousel";

const SingleDoc = ({
  id,
  shortTitle,
  date,
  courtName,
  citation,
  passages,
  isCarousel
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
        {isCarousel ? (
          <DocCarousel id={id} passages={passages} />
        ) : (
          passages.map(passage => {
            return <div key={id}>{passage}</div>;
          })
        )}
      </div>
    </React.Fragment>
  );
};

export default SingleDoc;
