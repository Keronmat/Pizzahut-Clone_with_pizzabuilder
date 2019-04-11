import React from "react";
import classes from "./NavigationItem.module.css";

export default function NavigationItem(props) {
  return (
    <li className={[classes.NavigationItem, "navbar-item"].join(" ")}>
      <a href={props.link}>{props.children}</a>
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
