import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="loading-skeleton">
      <div className="loading-top">
        <div className="wrapper">
          <div className="one"></div>
          <ul className="two-container">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="loading-bottom">
        <div className="wrapper">
          <ul className="three-container">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
