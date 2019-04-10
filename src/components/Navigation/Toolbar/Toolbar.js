import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import Cart from "../Cart/Cart";
import NavigationItems from "../NavigationItems/NavigationItems";
import NavigationItemsTwo from "../NavigationItemsTwo/NavigationItemsTwo";

export default function Toolbar(props) {
  return (
    <header className={[classes.Toolbar, "row", "header"].join(" ")}>
      <div className="col-md-6 col-sm-6 col-xs-6">
        <Logo />
      </div>
      <div className="col-md-6 col-sm-6 col-xs-6">
        <Cart />
      </div>

      <nav className="navbar navbar-default">
        <NavigationItems />
        <NavigationItemsTwo />
      </nav>
    </header>
  );
}
