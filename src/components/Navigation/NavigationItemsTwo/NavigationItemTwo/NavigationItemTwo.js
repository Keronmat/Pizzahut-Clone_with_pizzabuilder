import React from "react";
import classes from "./NavigationItemTwo.module.css";

export default function NavigationItemTwo(props) {
  return (
    <li
      className={[classes.NavigationItemTwo, "navbar-item", "mr-auto"].join(
        " "
      )}
    >
      <a href={props.link}>{props.children}</a>
    </li>
  );
}
