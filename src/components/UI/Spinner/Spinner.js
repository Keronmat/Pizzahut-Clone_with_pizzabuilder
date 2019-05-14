import React from "react";
import classes from "./Spinner.module.css";

//reusable component to display a spinner for loading animation.

export default function Spinner() {
  return <section className={classes.Loader}>Loading...</section>;
}
