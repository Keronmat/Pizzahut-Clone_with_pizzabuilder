import React from "react";
import classes from "./layoutStyles.module.css";

const Layout = props => {
  return (
    <React.Fragment>
      <div>Toolbar, sidedrawer, backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
