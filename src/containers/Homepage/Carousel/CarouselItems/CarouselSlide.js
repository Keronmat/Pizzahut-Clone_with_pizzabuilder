import React from "react";
import classes from "../Carousel.module.css";
import { Link } from "react-router-dom";

export default function CarouselSlide(props) {
  return (
    <Link
      to={props.link}
      className={
        props.index == props.activeIndex
          ? `${classes.carouselSlide} ${classes.carouselSlideActive}`
          : `${classes.carouselSlide}`
      }
    >
      <img
        src={props.imageSrc}
        className={classes.carouselSlideImg}
        alt="slider-img"
      />
    </Link>
  );
}
