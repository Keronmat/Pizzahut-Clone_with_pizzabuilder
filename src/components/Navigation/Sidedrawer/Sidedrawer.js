import React from "react";
import classes from "./Sidedrawer.module.css";
import SideDrawerItem from "./SideDrawerItems/SideDrawerItems";

export default function Sidedrawer(props) {
  return (
    <div className={[classes.Sidedrawer, "accordion"].join(" ")}>
      <SideDrawerItem>Menu</SideDrawerItem>
      <SideDrawerItem>My Account</SideDrawerItem>
      <SideDrawerItem>Customer Service</SideDrawerItem>
    </div>
  );
}
