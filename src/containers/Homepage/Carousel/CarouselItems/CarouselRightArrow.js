import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import classes from "../Carousel.module.css";

function CarouselLeftArrow(props) {
  return (
    <button
      className={[classes.carouselArrow, classes.carouselArrowRight].join(" ")}
      onClick={props.onClick}
    >
      <FontAwesomeIcon icon={faAngleRight} size="5x" />
    </button>
  );
}

export default CarouselLeftArrow;
