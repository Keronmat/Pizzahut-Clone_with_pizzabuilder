import React from "react";
import {Link} from 'react-router-dom';

import classes from "./Logo.module.css";
import PizzaLogoMobile from "../../assets/images/pizzahut_logo_small.png";
import PizzaLogoLg from "../../assets/images/pizzahut_logo_lg.png";

export default function Logo() {
  return (
    <Link to="/homepage" className={[classes.Logo, "navbar-brand"].join(" ")}>
      <img
        className={[classes.largeLogo, "img img-responsive"].join(" ")}
        src={PizzaLogoLg}
        alt="Pizzahut Logo"
      />
    </Link>
  );
}
export function LogoMobile() {
  return (
    <Link to="/homepage" className={[classes.Logo, "navbar-brand"].join(" ")}>
      <img
        className={[classes.mobileLogo, "img img-responsive"].join(" ")}
        src={PizzaLogoMobile}
        alt="Pizzahut Logo"
      />
    </Link>
  );
}
