import React from "react";
import citeSVG from "../icons/cite.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CitationButton = ({ citation }) => {
  return (
    <CopyToClipboard text={citation}>
      <button>
        <img src={citeSVG} alt="cite button svg" /> Cite
        {console.log('copied')}
      </button>
    </CopyToClipboard>
  );
};

export default CitationButton;
