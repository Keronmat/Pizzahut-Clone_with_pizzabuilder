import React from "react";
import classes from "../Carousel.module.css";

function CarouselLeftArrow(props) {
  return (
    <button
      className={[classes.carouselArrow, classes.carouselArrowRight].join(" ")}
      onClick={props.onClick}
    >
      &#10095;
    </button>
  );
}

export default CarouselLeftArrow;
