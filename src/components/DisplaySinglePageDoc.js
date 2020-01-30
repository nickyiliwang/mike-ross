import React, { useState } from "react";

const DisplaySinglePageDoc = ({
  title,
  shortTitle,
  date,
  courtName,
  citation,
  passages
}) => {
  const [isFullTitle, setIsFullTitle] = useState(false);
  const handleOnClick = () => {
    setIsFullTitle(!isFullTitle);
  };

  return (
    <React.Fragment>
      <div className="single-top-doc">
        <p>{citation}</p>
        <h2>{isFullTitle ? title : shortTitle}</h2>
        <p>{courtName}</p>
        <p>{date}</p>
      </div>

      <div>
        <button className="show-full-title" onClick={handleOnClick}>
          {isFullTitle ? "Hide Full Title" : "Show Full Title"}
        </button>
      </div>

      <div className="single-passages">
        {passages.map((passage, i) => {
          return (
            <p key={i} className="single-passages-content">
              {passage}
            </p>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default DisplaySinglePageDoc;
