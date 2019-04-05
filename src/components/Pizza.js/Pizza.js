import React from "react";
import classes from "./Pizza.module.css";
import PizzaIngredient from "./PizzaIngredient/PizzaIngredient";

const Pizza = props => {
  let listIngredients = [];
  Object.keys(props.ingredients).forEach((ig, i) => {
    if (props.ingredients[ig]) {
      listIngredients.push(<PizzaIngredient key={ig + i} toppingType={ig} />);
    }
  });

  if (listIngredients.length === 0) {
    listIngredients = <p>Please start adding ingredients</p>;
  }
  return (
    <div className={classes.Container}>
      <div className={classes.Pizza}>{listIngredients}</div>
    </div>
  );
};
export default Pizza;
// <PizzaIngredient key={ig + i} toppingType={ig} />;
