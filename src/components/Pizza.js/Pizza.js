import React from "react";
import classes from "./Pizza.module.css";
import PizzaIngredient from "./PizzaIngredient/PizzaIngredient";

const Pizza = props => {
  let listIngredients = props.ingredients.map((ig, i) => {
    return <PizzaIngredient key={ig + i} toppingType={ig} />;
  });

  return (
    <div className={classes.Container}>
      <div className={classes.Pizza}>{listIngredients}</div>
    </div>
  );
};
export default Pizza;
