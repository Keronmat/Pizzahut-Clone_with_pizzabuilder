import React, { Component } from "react";
import Pizza from "../../components/Pizza.js/Pizza";
import BuildControls from "../../components/Pizza.js/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  pepperoni: 2,
  sausage: 1,
  ham: 4,
  bacon: 3,
  chicken: 2,
  mushrooms: 1,
  peppers: 0.5,
  onions: 0.5,
  pineapple: 2,
  jalapenos: 1
};

export default class PizzaBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: {
        pepperoni: false,
        sausage: false,
        ham: false,
        bacon: false,
        chicken: false,
        mushrooms: false,
        peppers: false,
        onions: false,
        pineapple: false,
        jalapenos: false
      },
      totalPrice: 5
    };
  }

  addIngredientHandler = type => {
    const updatedIngrdients = {
      ...this.state.ingredients
    };
    updatedIngrdients[type] = true;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngrdients
    });
  };

  RemoveIngredientHandler = type => {
    const updatedIngrdients = {
      ...this.state.ingredients
    };
    updatedIngrdients[type] = false;

    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngrdients
    });
  };

  render() {
    return (
      <React.Fragment>
        <Pizza ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.RemoveIngredientHandler}
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
        />
      </React.Fragment>
    );
  }
}
