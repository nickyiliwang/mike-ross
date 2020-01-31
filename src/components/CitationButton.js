import React from "react";
import citeSVG from "../icons/cite.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CitationButton = ({ citation }) => {
  const notify = () =>
    toast(" ✔ Cited current document !", {
      autoClose: 1500,
      position: "top-center",
      hideProgressBar: true,
      pauseOnHover: false
    });

  return (
    <div>
      <ToastContainer />
      <CopyToClipboard text={citation}>
        <button onClick={notify}>
          <img src={citeSVG} alt="cite button svg" />
          Cite
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default CitationButton;
