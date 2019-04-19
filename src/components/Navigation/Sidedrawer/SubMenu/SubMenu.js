import React from "react";
import classes from "./SubMenu.module.css";

const SubMenu = props => {
  return (
    <div
      className={[classes.SubMenu, "card-body"].join(" ")}
      style={props.open ? { display: "block" } : { display: "none" }}
    >
      <ul className="menu-list accordion active">{props.children}</ul>
    </div>
  );
};
export default SubMenu;
