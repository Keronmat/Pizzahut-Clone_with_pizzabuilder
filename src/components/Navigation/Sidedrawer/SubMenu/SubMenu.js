import React from "react";
import classes from "./SubMenu.module.css";

const SubMenu = props => {
  return (
    <div className={[classes.SubMenu, "card-body"].join(" ")}>
      <ul className="menu-list accordion active">
        <li>{props.children}</li>
      </ul>
    </div>
  );
};
export default SubMenu;
