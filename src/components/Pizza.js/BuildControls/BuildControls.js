import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const meatControls = [
  { label: "Pepperoni", type: "pepperoni" },
  { label: "Sausage", type: "sausage" },
  { label: "Ham", type: "ham" }
];
const vegeControls = [
  { label: "Mushrooms", type: "mushrooms" },
  { label: "Peppers", type: "peppers" },
  { label: "Onions", type: "onions" },
  { label: "Pineapple", type: "pineapple" },
  { label: "Jalapenos", type: "jalapenos" }
];
const BuildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <div className={classes.Column}>
        {meatControls.map(ctrl => (
          <BuildControl key={ctrl.label} label={ctrl.label} />
        ))}
      </div>
      <div className={classes.Column}>
        {vegeControls.map(ctrl => (
          <BuildControl key={ctrl.label} label={ctrl.label} />
        ))}
      </div>
    </div>
  );
};
export default BuildControls;
