import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

export default function Modal(props) {
  return (
    <React.Fragment>
      <Backdrop show={props.show} clickedBackdrop={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? ".9" : "0"
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
}
