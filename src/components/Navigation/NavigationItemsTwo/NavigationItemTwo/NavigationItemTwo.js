import React from "react";
import classes from "./NavigationItemTwo.module.css";
import { NavLink } from "react-router-dom";

export default function NavigationItemTwo(props) {
  return (
    <li
      className={[classes.NavigationItemTwo, "navbar-item", "mr-auto"].join(
        " "
      )}
    >
      <NavLink to={props.link}>{props.children}</NavLink>
    </li>
  );
}
