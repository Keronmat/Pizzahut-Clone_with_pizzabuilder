import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import classes from "./BuildControl.module.css";

const BuildControl = props => {
  let disableAdd = props.ingredients[props.type] === true;
  let disableRem = props.ingredients[props.type] === false;

  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.Add}
        onClick={props.added}
        disabled={disableAdd}
      >
        <FontAwesomeIcon icon={faPlusCircle} />
      </button>
      <button
        className={classes.Remove}
        onClick={props.removed}
        disabled={disableRem}
      >
        <FontAwesomeIcon icon={faMinusCircle} />
      </button>
    </div>
  );
};
export default BuildControl;
