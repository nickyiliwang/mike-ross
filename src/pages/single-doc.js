import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import DisplaySingleDoc from "../components/DisplaySingleDoc";

const SingleDocPage = ({ history, searchResults }) => {
  const [currentDocData, setCurrentDocData] = useState({});
  const [currentDocAt, setCurrentDocAt] = useState(null);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(true);

  useEffect(() => {
    const currentDocID = history.location.pathname.split("/")[2];

    if (searchResults.hasOwnProperty("data")) {
      const resultsDocsData = searchResults.data.documents;
      const newCurrentDocAt = resultsDocsData.findIndex(
        doc => doc.id === currentDocID
      );

      setCurrentDocAt(newCurrentDocAt);

      setCurrentDocData({
        ...currentDocData,
        ...resultsDocsData[newCurrentDocAt]
      });

      handleButtonLogic();
    } else {
      axios.get(`http://localhost:4000/documents/${currentDocID}`).then(res => {
        setCurrentDocData(res.data.document);
      });
    }
  }, []);

  const handleButtonLogic = () => {
    if (newCurrentDocAt > 0 && newCurrentDocAt < resultsDocsData.length - 1) {
      setDisableNext(false);
      setDisablePrev(false);
    }
    if (newCurrentDocAt === 0) {
      setDisableNext(false);
    }
    if (newCurrentDocAt === resultsDocsData.length - 1) {
      setDisablePrev(false);
    }
  };

  const renderSingleDoc = () => {
    if (currentDocData.hasOwnProperty("title")) {
      const { ...currentDocDataProps } = currentDocData;
      return <DisplaySingleDoc isCarousel={false} {...currentDocDataProps} />;
    }
  };

  const handleOnClick = e => {
    if (e.target.value === "+") {
      setCurrentDocAt(currentDocAt + 1);
      handleButtonLogic();
      console.log(currentDocData);
    } else {
      setCurrentDocAt(currentDocAt - 1);

      handleButtonLogic();
      console.log(currentDocData);
    }
  };

  return (
    <div>
      <div>
        <button disabled={disablePrev} onClick={handleOnClick} value="-">
          Prev
        </button>
        <button disabled={disableNext} onClick={handleOnClick} value="+">
          Next
        </button>
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
