import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import DealsButton from "./NavigationItem/DealsButton/DealsButton";

export default function NavigationItems() {
  return (
    <ul className={[classes.NavigationItems, "nav navbar-nav"].join(" ")}>
      <NavigationItem link="/">Pizza</NavigationItem>
      <NavigationItem link="/">Starters</NavigationItem>
      <NavigationItem link="/">More</NavigationItem>
      <DealsButton link="/">DEALS</DealsButton>
    </ul>
  );
}
