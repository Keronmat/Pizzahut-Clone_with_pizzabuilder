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
      <div>
        <p>
          Current Price: <strong>${props.price.toFixed(2)}</strong>
        </p>
        <button
          className={classes.OrderButton}
          disabled={props.price <= 5 ? true : false}
        >
          ORDER NOW
        </button>
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
