import React from "react";
import classes from "../Carousel.module.css";
export default function CarouselIndicator(props) {
  return (
    <li>
      <button
        className={
          props.index == props.activeIndex
            ? `${classes.carouselIndicator} ${classes.carouselIndicatorActive}`
            : `${classes.carouselIndicator}`
        }
        onClick={props.onClick}
      />
    </li>
  );
}
