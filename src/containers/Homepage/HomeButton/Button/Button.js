import React from "react";
import { Link } from "react-router-dom";
import classes from "./Button.module.css";

function Button(props) {
  return (
    <div
      className={[
        classes.ButtonContainer,
        "col-md-6 col-sm-6 col-xs-6 col-6"
      ].join(" ")}
    >
      <Link to={props.link}>
        <button className={[classes.Button, "btn btn-block"].join(" ")}>
          {props.children}
        </button>
      </Link>
    </div>
  );
}

export default Button;
