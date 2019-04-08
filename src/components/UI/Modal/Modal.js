import React from "react";
import classes from "./Modal.module.css";

export default function Modal(props) {
  return (
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100px)",
        opacity: props.show ? ".9" : "0"
      }}
    >
      {props.children}
    </div>
  );
}
