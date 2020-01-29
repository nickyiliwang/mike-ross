import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { withRouter } from "react-router-dom";

const DocCarousel = ({ id, passages, history }) => {
  const handleOnClick = () => {
    history.push(`/doc/${id}`);
  };

  {
    return (
      <Carousel
        useKeyboardArrows={true}
        showThumbs={false}
        showIndicators={false}
        dynamicHeight
      >
        {passages.map(passage => {
          return (
            <div key={id} className="passage-text-container">
              <p className="passage-text" onClick={handleOnClick}>
                {passage}
              </p>
              <div className="fadeout"></div>
            </div>
          );
        })}
      </Carousel>
    );
  }
};

export default withRouter(DocCarousel);
