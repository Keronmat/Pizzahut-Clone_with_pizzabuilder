import React, { Component } from "react";
import Pizza from "../../components/Pizza.js/Pizza";
import BuildControls from "../../components/Pizza.js/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Pizza.js/OrderSumarry/OrderSummary";

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
      size: "regularPan",
      currentPrice: 0,
      purchasing: false
    };
  }

  addIngredientHandler = type => {
    const updatedIngrdients = {
      ...this.state.ingredients
    };
    updatedIngrdients[type] = true;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.currentPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({
      currentPrice: newPrice,
      ingredients: updatedIngrdients
    });
  };

  RemoveIngredientHandler = type => {
    const { ingredients, currentPrice } = this.state;
    const updatedIngrdients = {
      ...ingredients
    };
    updatedIngrdients[type] = false;

    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = currentPrice;
    const newPrice = oldPrice - priceDeduction;

    this.setState({
      currentPrice: newPrice,
      ingredients: updatedIngrdients
    });
  };

  handleSize = event => {
    this.setState(
      {
        size: event.target.value
      },
      function() {
        console.log(this.state.size, this.state.sizePrice);
      }
    );
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  render() {
    return (
      <React.Fragment>
        <Modal show={this.state.purchasing}>
          <OrderSummary
            ingredients={this.state.ingredients}
            currentPrice={this.state.currentPrice}
            ingredientRemoved={this.RemoveIngredientHandler}
          />
        </Modal>
        <Pizza ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.RemoveIngredientHandler}
          ingredients={this.state.ingredients}
          currentPrice={this.state.currentPrice}
          purchaseHandler={this.purchaseHandler}
          ordered={this.purchaseHandler}
          handleSize={this.handleSize}
          size={this.state.size}
        />
      </React.Fragment>
    );
  }
}
