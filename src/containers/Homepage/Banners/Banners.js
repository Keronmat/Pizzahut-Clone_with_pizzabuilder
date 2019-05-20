import React, { Component } from "react";
import { Link } from "react-router-dom";

import classes from "./Banners.module.css";
import banner1 from "../../../assets/images/banner-1.jpg";
import banner2 from "../../../assets/images/banner-2.png";

export default class Banners extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: [{ img: banner1, link: "/" }, { img: banner2, link: "/" }]
    };
  }

  render() {
    const ban = this.state.img.map((obj, index) => {
      return (
        <div key={index} className="col-md-6 col-sm-12 col-xs-12">
          <Link to={obj.link}>
            <img src={obj.img} alt="banner" />
          </Link>
        </div>
      );
    });

    return <div className={[classes.Banners, "row"].join(" ")}>{ban}</div>;
  }
}
