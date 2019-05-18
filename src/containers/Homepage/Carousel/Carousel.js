import React, { Component } from "react";
import classes from "./Carousel.module.css";
import { Link } from "react-router-dom";

import slider from "../../../assets/images/Slider.jpg";
import slider2 from "../../../assets/images/Slider2.jpg";
import slider3 from "../../../assets/images/Slider3.jpg";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [slider3]
    };
  }

  showSlides = n => {
    /*
    var i;
    var slides = this.state.images;
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";*/
  };

  render() {
    let slidesList = this.state.images.map((image, index) => {
      return (
        <div key={index} className={[classes.slide, "mySlide"].join(" ")}>
          <Link to="/Deals" className={classes.link}>
            <img src={image} className="img-responsive" alt="slider-img" />
          </Link>
        </div>
      );
    });
    return (
      <div classNameName="row">
        <div className={[classes.slideshowContainer, "col-12"].join(" ")}>
          {slidesList}

          <button className={classes.prev}>&#10094;</button>
          <button className={classes.next}>&#10095;</button>
        </div>
        <div className={classes.slideshowDots}>
          <span className={classes.dot} />
          <span className={classes.dot} />
          <span className={classes.dot} />
        </div>
      </div>
    );
  }
}

export default Carousel;
