import React from "react";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const handleOnClick = () => {
    history.push("/results");
  };

  return (
    <div className="header-container">
      {history.location.pathname.split("/")[1] === "doc" && (
        <button className="previous-button" onClick={handleOnClick}>
          Previous
        </button>
      )}
      <Link to="/" className="header-link">
        <h1>ross mini</h1>
      </Link>
    </div>
  );
};

export default Header;
