import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const DocCarousel = ({ id, passages }) => {
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
              <p className="passage-text">{passage}</p>
              <div className="fadeout"></div>
            </div>
          );
        })}
      </Carousel>
    );
  }
};

export default DocCarousel;
