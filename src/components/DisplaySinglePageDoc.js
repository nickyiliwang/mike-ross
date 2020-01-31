import React, { useState } from "react";

const DisplaySinglePageDoc = ({
  title,
  shortTitle,
  date,
  courtName,
  citation,
  passages,
  fontSizeValue,
  fontFamilyValue
}) => {
  const [isFullTitle, setIsFullTitle] = useState(false);

  const handleOnClick = () => {
    setIsFullTitle(!isFullTitle);
  };

  return (
    <div className="single-page-content">
      <div className="single-top-doc">
        <p>{citation}</p>
        <h2>{isFullTitle ? title : shortTitle}</h2>
        <p>{courtName}</p>
        <p>{date}</p>
      </div>

      <div
        className="single-passages"
        style={{
          fontSize: `${fontSizeValue}px`,
          fontFamily: `${fontFamilyValue}`
        }}
      >
        <button className="show-full-title" onClick={handleOnClick}>
          {isFullTitle ? "Hide Full Title" : "Show Full Title"}
        </button>
        {passages.map((passage, i) => {
          return (
            <p key={i} className="single-passages-content">
              {passage}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default DisplaySinglePageDoc;
