import React from "react";
import classes from "./DealsButton.module.css";

export default function DealsButton(props) {
  return (
    <li
      className={[classes.NavigationItem, classes.Deals, "navbar-item"].join(
        " "
      )}
    >
      <a href={props.link}>{props.children}</a>
    </li>
  );
}
