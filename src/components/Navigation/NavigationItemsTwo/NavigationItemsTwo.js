import React from "react";
import classes from "./NavigationItemsTwo.module.css";
import NavigationItemTwo from "./NavigationItemTwo/NavigationItemTwo";

export default function NavigationItemsTwo() {
  return (
    <ul
      className={[
        classes.NavigationItemsTwo,
        "nav",
        "navbar-nav",
        "navbar-right"
      ].join(" ")}
    >
      <NavigationItemTwo link="/">Sign in</NavigationItemTwo>
      <NavigationItemTwo link="/">Create account</NavigationItemTwo>
      <NavigationItemTwo link="/">Birthday reservation</NavigationItemTwo>
      <NavigationItemTwo link="/">find a Pizza Hut</NavigationItemTwo>
      <NavigationItemTwo link="/">DisCounts</NavigationItemTwo>
    </ul>
  );
}
