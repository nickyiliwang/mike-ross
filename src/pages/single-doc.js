import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import DisplaySinglePageDoc from "../components/DisplaySinglePageDoc";
import CitationButton from "../components/CitationButton";
import Dropdown from "../components/Dropdown";

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
    <div className="single-doc-page">
      <div className="user-controls">
        <div className="left-controls">
          <div className="citation-button">
            <CitationButton citation={currentDocData.citation} />
          </div>
          <div className="vr"></div>
          <Dropdown
            setFontSizeValue={setFontSizeValue}
            setFontFamilyValue={setFontFamilyValue}
          />
        </div>
        <div className="navigate-results">
          <button
            className="previous-button"
            disabled={disablePrev}
            onClick={handleOnClick}
            value="-"
          >
            Previous
          </button>
          <div className="vr"></div>
          <button
            className="next-button"
            disabled={disableNext}
            onClick={handleOnClick}
            value="+"
          >
            Next
          </button>
        </div>
      </div>
      <div className="wrapper">{renderSingleDoc()}</div>
    </div>
  );
};

export default withRouter(SingleDocPage);
