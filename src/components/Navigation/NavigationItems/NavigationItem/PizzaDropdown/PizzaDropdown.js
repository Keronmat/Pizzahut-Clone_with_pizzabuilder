import React from "react";
import classes from "./PizzaDropdown.module.css";

export default function PizzaDropdown(props) {
  return (
    <ul className={classes.PizzaDropdown}>
      <li>
        <a href="/">Pizza Builder</a>
      </li>
      <li>
        <a href="/">Ultimate Flavour</a>
      </li>
      <li>
        <a href="/">The Legends</a>
      </li>
    </ul>
  );
}
