import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import SingleDoc from "../components/SingleDoc";

const SingleDocPage = ({ history, searchResults }) => {
  const [currentDocAt, setCurrentDocAt] = useState(0);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(true);

  useEffect(() => {
    const currentDocID = history.location.pathname.split("/")[2];
    console.log(searchResults);

    if (searchResults.hasOwnProperty("data")) {
      console.log("has data");
      const resultsLength = searchResults.data.documents.length;
      console.log(resultsLength);
      const newCurrentDocAt =
        searchResults.data.documents.findIndex(doc => doc.id === currentDocID) +
        1;
      setCurrentDocAt(newCurrentDocAt - 1);
      if (currentDocAt === 1) {
        setDisableNext(false);
      }
      if (currentDocAt === resultsLength) {
        setDisablePrev(false);
      }
    } else {
      axios.get(`http://localhost:4000/documents/${currentDocID}`).then(res => {
        console.log(res);
      });
    }
  });

  const renderSingleDoc = () => {
    if (searchResults.hasOwnProperty("data")) {
      const { ...currentDocProps } = searchResults.data.document[currentDocAt];

      console.log(searchResults.data.document[currentDocAt]);

      return <SingleDoc isCarousel={false} {...currentDocProps} />;
    }
  };

  return (
    <div>
      <div>
        <button disabled={disablePrev}>Prev</button>
        <button disabled={disableNext}>Next</button>
      </div>
      <h2>SINGLE DOCUMENT</h2>
      <div>{renderSingleDoc()}</div>
    </div>
  );
};

export default withRouter(SingleDocPage);

// Display Settings Dropdown (font size and font family)

// cite button that copies the text

// renders p tag
// show full title button,

// searchResults comes in as an array of objects, depending on which document the use is looking at. we need to know if the array has something in front of it or behind it
// x results in front
// y results in back
// you are at x
