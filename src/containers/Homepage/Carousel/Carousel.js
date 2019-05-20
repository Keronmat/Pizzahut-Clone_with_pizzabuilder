import React, { Component } from "react";
import classes from "./Carousel.module.css";
//import { Link } from "react-router-dom";

import CarouselSlide from "./CarouselItems/CarouselSlide";
import CarouselIndicator from "./CarouselItems/CarouselIndicator";
import CarouselLeftArrow from "./CarouselItems/CarouselLeftArrow";
import CarouselRightArrow from "./CarouselItems/CarouselRightArrow";

import slider from "../../../assets/images/Slider.jpg";
import slider2 from "../../../assets/images/Slider2.jpg";
import slider3 from "../../../assets/images/Slider3.jpg";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      CarouselImages: [
        { img: slider, link: "/" },
        { img: slider2, link: "/" },
        { img: slider3, link: "/" }
      ]
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      let index = this.state.activeIndex;
      let slidesLength = this.state.CarouselImages.length - 1;

      if (index === slidesLength) {
        index = -1;
      }

      ++index;
      this.setState({ activeIndex: index });
    }, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  goToSlide = index => {
    this.setState({ activeIndex: index });
  };

  onNextClick = e => {
    e.preventDefault();

    let index = this.state.activeIndex;
    let slidesLength = this.state.CarouselImages.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  };

  onPrevClick = e => {
    e.preventDefault();

    let index = this.state.activeIndex;
    let slidesLength = this.state.CarouselImages.length;

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

          <div className={classes.carouselSlides}>
            {this.state.CarouselImages.map((obj, index) => {
              console.log(obj);
              return (
                <CarouselSlide
                  key={index}
                  index={index}
                  activeIndex={this.state.activeIndex}
                  imageSrc={obj.img}
                  link={obj.link}
                />
              );
            })}
          </div>

          <CarouselRightArrow onClick={e => this.onNextClick(e)} />

          <ul className={classes.carouselIndicators}>
            {this.state.CarouselImages.map((obj, index) => (
              <CarouselIndicator
                key={index}
                index={index}
                activeIndex={this.state.activeIndex}
                isActive={this.state.activeIndex === index}
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
