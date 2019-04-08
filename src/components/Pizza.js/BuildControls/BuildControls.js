import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const meatControls = [
  { label: "Pepperoni", type: "pepperoni" },
  { label: "Sausage", type: "sausage" },
  { label: "Ham", type: "ham" },
  { label: "Bacon", type: "bacon" },
  { label: "Chicken", type: "chicken" }
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
      <div className={classes.Column1}>
        <p>
          Current Price: <strong>${props.currentPrice.toFixed(2)}</strong>
        </p>
        <div>
          <select
            readOnly
            name="Pan Size"
            value={props.size}
            onChange={e => props.handleSize(e)}
            className={classes.Size}
          >
            <option value="regularPan">Regular Pan</option>
            <option value="largePan">Large Pan</option>
            <option value="xlPan">XL Pan</option>
          </select>
        </div>
        <div>
          <button className={classes.OrderButton} onClick={props.ordered}>
            ORDER NOW
          </button>
        </div>
      </div>

      <div>
        {meatControls.map(ctrl => (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            ingredients={props.ingredients}
            type={ctrl.type}
          />
        ))}
      </div>
      <div>
        {vegeControls.map(ctrl => (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            ingredients={props.ingredients}
            type={ctrl.type}
          />
        ))}
      </div>
    </div>
  );
};
export default BuildControls;
