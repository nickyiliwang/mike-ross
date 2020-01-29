import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const DocCarousel = ({ passages }) => {
  {
    return (
      <Carousel showThumbs={false} className='carousel'>
        {passages.map(passage => {
          return (
            <div>
              <p>{passage}</p>
            </div>
          );
        })}
      </Carousel>
    );
  }
};

export default DocCarousel;
