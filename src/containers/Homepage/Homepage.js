import React from "react";

import Carousel from "./Carousel/Carousel";
import HomeButton from "./HomeButton/HomeButton";
import Banners from "./Banners/Banners";
import classes from "./Homepage.module.css";

export default function Homepage() {
  return (
    <div className={[classes.Home, "container-fluid"].join(" ")}>
      <Carousel />
      <HomeButton />
      <Banners />
    </div>
  );
}
