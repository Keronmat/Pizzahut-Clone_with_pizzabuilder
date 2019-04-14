import React from "react";
import classes from "./layoutStyles.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidedrawer from "../Navigation/Sidedrawer/Sidedrawer";

const Layout = props => {
  return (
    <React.Fragment>
      <Toolbar />
      <Sidedrawer />
      <main className={classes.Content}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
