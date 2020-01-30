import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import DisplaySinglePageDoc from "../components/DisplaySinglePageDoc";
import CitationButton from "../components/CitationButton";
import Dropdown from "../components/dropdown/Dropdown";

const SingleDocPage = ({ history, searchResults }) => {
  // documents state
  const [currentDocData, setCurrentDocData] = useState({});
  const [searchResultsData, setSearchResultsData] = useState([]);
  const [currentDocAt, setCurrentDocAt] = useState(null);
  // button state
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(true);
  // ui state
  const [fontSizeValue, setFontSizeValue] = useState(16);
  const [fontFamilyValue, setFontFamilyValue] = useState(
    "Helvetica, sans-serif"
  );

  useEffect(() => {
    const currentDocID = history.location.pathname.split("/")[2];

    if (searchResults.hasOwnProperty("data")) {
      const resultsDocsData = searchResults.data.documents;
      setSearchResultsData(resultsDocsData);

      const newCurrentDocAt = resultsDocsData.findIndex(
        doc => doc.id === currentDocID
      );

      setCurrentDocAt(newCurrentDocAt);

      setCurrentDocData({
        ...currentDocData,
        ...resultsDocsData[newCurrentDocAt]
      });

      nextPrevButtonLogic(newCurrentDocAt, resultsDocsData);
    } else {
      axios.get(`http://localhost:4000/documents/${currentDocID}`).then(res => {
        setCurrentDocData(res.data.document);
      });
    }
  }, [history.location.pathname]);

  const nextPrevButtonLogic = (docAt, results) => {
    if (docAt > 0 && docAt < results.length - 1) {
      setDisableNext(false);
      setDisablePrev(false);
    }
    if (docAt === 0) {
      setDisableNext(false);
      setDisablePrev(true);
    }
    if (docAt === results.length - 1) {
      setDisablePrev(false);
      setDisableNext(true);
    }
  };

  const handleOnClick = e => {
    if (e.target.value === "+") {
      const nextResult = searchResultsData[currentDocAt + 1].id;
      history.push(`/doc/${nextResult}`);
      nextPrevButtonLogic(currentDocAt, searchResultsData);
    } else {
      const prevResult = searchResultsData[currentDocAt - 1].id;
      history.push(`/doc/${prevResult}`);
      nextPrevButtonLogic(currentDocAt, searchResultsData);
    }
  };

  const renderSingleDoc = () => {
    if (currentDocData.hasOwnProperty("title")) {
      const { ...currentDocDataProps } = currentDocData;
      return (
        <DisplaySinglePageDoc
          fontSizeValue={fontSizeValue}
          fontFamilyValue={fontFamilyValue}
          {...currentDocDataProps}
        />
      );
    }
  };

  return (
    <div>
      <div className="user-controls">
        <CitationButton citation={currentDocData.citation} />
        <Dropdown
          setFontSizeValue={setFontSizeValue}
          setFontFamilyValue={setFontFamilyValue}
        />
        <button disabled={disablePrev} onClick={handleOnClick} value="-">
          Prev
        </button>
        <button disabled={disableNext} onClick={handleOnClick} value="+">
          Next
        </button>
      </div>
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
