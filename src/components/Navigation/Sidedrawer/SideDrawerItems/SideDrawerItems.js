import React from "react";
import SubMenu from "../SubMenu/SubMenu";
import classes from "./SideDrawerItems.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const SideDrawerItem = props => {
  return (
    <div className={[classes.SideDrawerItems, "card"].join(" ")}>
      <div className={[classes.cardHeader, "card-header"].join(" ")}>
        <button>
          <span>{props.children}</span>
          <span className={classes.Icon}>
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </button>
      </div>
    </div>
  );
};
export default SideDrawerItem;
