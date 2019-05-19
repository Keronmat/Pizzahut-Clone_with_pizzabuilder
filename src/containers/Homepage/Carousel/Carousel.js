import React, { Component } from "react";
import classes from "./Carousel.module.css";
import { Link } from "react-router-dom";

import CarouselSlide from "./CarouselItems/CarouselSlide";
import CarouselIndicator from "./CarouselItems/CarouselIndicator";
import CarouselLeftArrow from "./CarouselItems/CarouselLeftArrow";
import CarouselRightArrow from "./CarouselItems/CarouselRightArrow";

import slider from "../../../assets/images/Slider.jpg";
import slider2 from "../../../assets/images/Slider2.jpg";
import slider3 from "../../../assets/images/Slider3.jpg";

const CAROUSEL_IMAGES = [slider, slider2, slider3];

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  goToSlide = index => {
    this.setState({ activeIndex: index });
  };

  onNextClick = e => {
    e.preventDefault();

    let index = this.state.activeIndex;
    let slidesLength = CAROUSEL_IMAGES.length;

    if (index === slidesLength) {
      index = -1;
    }
    ++index;

    this.setState({ activeIndex: index });
  };

  onPrevClick = e => {
    e.preventDefault();

    let index = this.state.activeIndex;
    let slidesLength = CAROUSEL_IMAGES.length;

    if (index < 1) {
      index = slidesLength;
    }
    --index;

    this.setState({ activeIndex: index });
  };

  render() {
    return (
      <div className={[classes.carouselContainer, "row"].join(" ")}>
        <div className={[classes.carousel, "col-12"].join(" ")}>
          <CarouselLeftArrow onClick={e => this.onPrevClick(e)} />

          <ul className={classes.carouselSlides}>
            {CAROUSEL_IMAGES.map((img, index) => (
              <CarouselSlide
                key={index}
                index={index}
                activeIndex={this.state.activeIndex}
                imageSrc={img}
              />
            ))}
          </ul>

          <CarouselRightArrow onClick={e => this.onNextClick(e)} />

          <ul className={classes.carouselIndicators}>
            {CAROUSEL_IMAGES.map((img, index) => (
              <CarouselIndicator
                key={index}
                index={index}
                activeIndex={this.state.activeIndex}
                isActive={this.state.activeIndex == index}
                onClick={e => this.goToSlide(index)}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Carousel;
