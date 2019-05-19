import React from "react";
import classes from "../Carousel.module.css";

export default function CarouselSlide(props) {
  return (
    <li
      className={
        props.index == props.activeIndex
          ? `${classes.carouselSlide} ${classes.carouselSlideActive}`
          : `${classes.carouselSlide}`
      }
    >
      <img
        src={props.imageSrc}
        className={classes.carouselSlideContent}
        alt="slider-img"
      />
    </li>
  );
}
