import React from "react";
import classes from "./Logo.module.css";
import PizzaLogoMobile from "../../assets/images/pizzahut_logo_small.png";
import PizzaLogoLg from "../../assets/images/pizzahut_logo_lg.png";

export default function Logo() {
  return (
    <a href="/" className={[classes.Logo, "navbar-brand"].join(" ")}>
      <img
        className={[classes.largeLogo, "img img-responsive"].join(" ")}
        src={PizzaLogoLg}
        alt="Pizzahut Logo"
      />
    </a>
  );
}
export function LogoMobile() {
  return (
    <a href="/" className={[classes.Logo, "navbar-brand hidden-xs"].join(" ")}>
      <img
        className={[classes.mobileLogo, "img img-responsive"].join(" ")}
        src={PizzaLogoMobile}
        alt="Pizzahut Logo"
        style={{ maxWidth: "60px", marginTop: "-10px", padding: "2px" }}
      />
    </a>
  );
}
