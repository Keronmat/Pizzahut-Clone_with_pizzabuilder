import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import Cart from "../Cart/Cart";

export default function Toolbar(props) {
  return (
    <header className={classes.Toolbar}>
      <Logo />
      <Cart />

      <nav />
    </header>
  );
}
