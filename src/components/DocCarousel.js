import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const DocCarousel = ({ passages }) => {
  {
    return (
      <Carousel
        useKeyboardArrows={true}
        showThumbs={false}
        showIndicators={false}
      >
        {passages.map(passage => {
          return (
            <div>
              <p className="passage-text">{passage}</p>
            </div>
          );
        })}
      </Carousel>
    );
  }
};

export default DocCarousel;
