import React from "react";
import classes from "./SubMenu.module.css";

const SubMenu = props => {
  const toggleClass = props.open ? classes.Open : classes.Close;
  return (
    <div className={[classes.SubMenu, toggleClass, "card-body"].join(" ")}>
      <ul className="menu-list accordion active">{props.children}</ul>
    </div>
  );
};
export default SubMenu;
