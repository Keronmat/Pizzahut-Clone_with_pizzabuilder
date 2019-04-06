import React, { Component } from "react";
import PropTypes from "prop-types";
import PizzaTopping from "./PizzaTopping/PizzaTopping";

class PizzaIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.toppingType) {
      case "pepperoni":
        ingredient = <PizzaTopping topping={"pepperoni"} toppingAmount={12} />;
        break;
      case "sausage":
        ingredient = <PizzaTopping topping={"sausage"} toppingAmount={12} />;
        break;
      case "ham":
        ingredient = <PizzaTopping topping={"ham"} toppingAmount={12} />;
        break;
      case "bacon":
        ingredient = <PizzaTopping topping={"bacon"} toppingAmount={12} />;
        break;
      case "chicken":
        ingredient = <PizzaTopping topping={"chicken"} toppingAmount={12} />;
        break;
      case "mushrooms":
        ingredient = <PizzaTopping topping={"mushrooms"} toppingAmount={12} />;
        break;
      case "peppers":
        ingredient = <PizzaTopping topping={"peppers"} toppingAmount={12} />;
        break;
      case "onions":
        ingredient = <PizzaTopping topping={"onions"} toppingAmount={12} />;
        break;
      case "pineapple":
        ingredient = <PizzaTopping topping={"pineapple"} toppingAmount={12} />;
        break;
      case "jalapenos":
        ingredient = <PizzaTopping topping={"jalapenos"} toppingAmount={12} />;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}
PizzaIngredient.propTypes = {
  toppingType: PropTypes.string.isRequired
};
export default PizzaIngredient;
