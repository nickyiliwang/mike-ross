import React from "react";
import DocCarousel from "./DocCarousel";
import { withRouter } from "react-router-dom";

const DisplaySingleDoc = ({
  id,
  shortTitle,
  date,
  courtName,
  citation,
  passages,
  history
}) => {
  const handleOnClick = () => {
    history.push(`/doc/${id}`);
  };

  return (
    <div className="list-of-documents">
      <div onClick={handleOnClick} className="list-top-doc">
        <h3>{shortTitle}</h3>
        <div className="meta-text">
          <p>{courtName}</p>
          <div className="vr"></div>
          <p>{date}</p>
          <div className="vr"></div>
          <p>{citation}</p>
        </div>
      </div>
      <div className="wrapper list-passages">
        <DocCarousel id={id} passages={passages} />
      </div>
    </div>
  );
};

export default withRouter(DisplaySingleDoc);
