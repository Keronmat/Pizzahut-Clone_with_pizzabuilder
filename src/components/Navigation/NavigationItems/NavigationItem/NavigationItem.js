import React from "react";
import classes from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";

export default function NavigationItem(props) {
  return (
    <li className={[classes.NavigationItem, "navbar-item"].join(" ")}>
      <NavLink to={props.link}>{props.children}</NavLink>
    </li>
  );
}
export function NavigationItemDropdown(props) {
  return (
    <li
      className={[classes.NavigationItem, "navbar-item"].join(" ")}
      onMouseOver={() => props.handleOpen()}
      onMouseLeave={() => props.handleClose()}
    >
      <span>{props.children}</span>
    </li>
  );
}
