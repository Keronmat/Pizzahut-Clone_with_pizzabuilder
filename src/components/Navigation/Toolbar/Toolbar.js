import React from "react";
import classes from "./Toolbar.module.css";
import Logo, { LogoMobile } from "../../Logo/Logo";
import Cart from "../Cart/Cart";
import NavigationItems from "../NavigationItems/NavigationItems";
import NavigationItemsTwo from "../NavigationItemsTwo/NavigationItemsTwo";

export default function Toolbar(props) {
  return (
    <header className={[classes.Toolbar, "row", "header"].join(" ")}>
      <div className="col-md-6 col-sm-4 col-xs-4">
        <Logo />
        <LogoMobile />
      </div>

      <div
        className={[classes.CartDiv, "col-md-6 col-sm-4 col-xs-4"].join(" ")}
      >
        <Cart />
      </div>

      <nav className="navbar navbar-default">
        <NavigationItems />
        <NavigationItemsTwo />
      </nav>
    </header>
  );
}
