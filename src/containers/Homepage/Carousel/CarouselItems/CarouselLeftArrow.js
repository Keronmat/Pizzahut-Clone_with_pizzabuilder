import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import classes from "../Carousel.module.css";

function CarouselLeftArrow(props) {
  return (
    <button
      className={[classes.carouselArrow, classes.carouselArrowLeft].join(" ")}
      onClick={props.onClick}
    >
      <FontAwesomeIcon icon={faAngleLeft} size="5x" />
    </button>
  );
}

export default CarouselLeftArrow;
