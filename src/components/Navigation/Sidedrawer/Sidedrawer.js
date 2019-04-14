import React from "react";
import classes from "./Sidedrawer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Sidedrawer = props => {
  return (
    <div className={classes.Sidedrawer}>
      <nav>
        <ul className="menu-list active">
          <li className="toggle accordion-toggle">
            <button className="menu-link">
              <span>Menu</span>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </li>
          <li className="toggle accordion-toggle">
            <button className="menu-link">
              <span> My Account</span>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </li>
          <li className="toggle accordion-toggle">
            <button className="menu-link">
              <span> Customer Service</span>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Sidedrawer;

const Submenu = props => {
  return (
    <ul className="menu-list accordion active">
      <li />
    </ul>
  );
};
