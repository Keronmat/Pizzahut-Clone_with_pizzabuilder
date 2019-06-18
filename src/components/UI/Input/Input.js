import React from "react";

import classes from "./Input.module.css";

const input = props => {
  let inputElement = null;
  const inputClasses = [classes.InputElement, "form-control"];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          required={props.required}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          value={props.value}
          required={props.required}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          required={props.required}
          onChange={props.changed}
        />
      );
  }
  // console.log(inputClasses);
  return (
    <div
      className={[classes.Input, "form-group col-md-6 col-sm-6 col-xs-12"].join(
        " "
      )}
    >
      <label className={classes.Label}>
        {props.label}
        <span className={classes.req}>{props.required ? " *" : ""}</span>
      </label>
      {inputElement}
    </div>
  );
};

export default input;
