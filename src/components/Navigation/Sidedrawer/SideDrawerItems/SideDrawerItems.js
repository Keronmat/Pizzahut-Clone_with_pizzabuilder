import React from "react";
import classes from "./SideDrawerItems.module.css";

const SideDrawerItems = props => {
  return (
    <div className={[classes.SideDrawerItems, "card"].join(" ")}>
      <div className={[classes.cardHeader, "card-header"].join(" ")}>
        <button onClick={() => props.toggle(props.id, props.index)}>
          <span>{props.header}</span>
          <span className={classes.IconPlus} />
        </button>
      </div>

      {props.children}
    </div>
  );
};
export default SideDrawerItems;
