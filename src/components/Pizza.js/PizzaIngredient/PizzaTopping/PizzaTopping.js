import React from "react";
import classes from "./PizzaTopping.module.css";

const PizzaTopping = ({ topping, toppingAmount }) => {
  let toppingIngredient = [];

  for (let i = 1; i <= toppingAmount; i++) {
    toppingIngredient.push(
      <div
        key={`${topping + i}`}
        className={`${classes[topping]} ${classes[topping + "-" + i]}`}
      />
    );
  }
  console.log(toppingIngredient);
  return toppingIngredient;
};

export default PizzaTopping;
