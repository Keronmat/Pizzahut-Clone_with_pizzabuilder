import React from "react";
import SubMenu from "../SubMenu/SubMenu";
import classes from "./SideDrawerItems.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const SideDrawerItem = props => {
  return (
    <div className={[classes.SideDrawerItem, "card"].join(" ")}>
      <div className="card-header">
        <button>
          <h5 className="mb-0">
            {props.children}
            <FontAwesomeIcon icon={faPlus} />
          </h5>
        </button>
      </div>
    </div>
  );
};
export default SideDrawerItem;
