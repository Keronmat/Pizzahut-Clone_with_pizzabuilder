import React from "react";
import classes from "./layoutStyles.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = props => {
  return (
    <React.Fragment>
      <Toolbar />
      <div>Toolbar, sidedrawer, backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
