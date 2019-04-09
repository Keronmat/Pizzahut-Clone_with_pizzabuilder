import React from "react";
import classes from "./Logo.module.css";
import PizzaLogoMobile from "../../assets/images/pizzahut_logo_small.png";
import PizzaLogoLg from "../../assets/images/pizzahut_logo_lg.png";

export default function Logo() {
  return (
    <div className={classes.Logo}>
      <img
        className={classes.mobileLogo}
        src={PizzaLogoMobile}
        alt="Pizzahut Logo"
      />
      <img
        className={classes.largeLogo}
        src={PizzaLogoLg}
        alt="Pizzahut Logo"
      />
    </div>
  );
}
