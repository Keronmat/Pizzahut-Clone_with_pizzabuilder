import React from "react";
import classes from "../Carousel.module.css";

function CarouselLeftArrow(props) {
  return (
    <button
      className={[classes.carouselArrow, classes.carouselArrowLeft].join(" ")}
      onClick={props.onClick}
    >
      &#10094;
    </button>
  );
}

export default CarouselLeftArrow;
