import React, { Component } from "react";
import Pizza from "../../components/Pizza.js/Pizza";
import BuildControls from "../../components/Pizza.js/BuildControls/BuildControls";

export default class PizzaBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: {
        pepperoni: false,
        sausage: false,
        ham: false,
        mushrooms: false,
        peppers: false,
        onions: false,
        pineapple: false,
        jalapenos: false
      }
    };
  }

  render() {
    return (
      <React.Fragment>
        <Pizza ingredients={this.state.ingredients} />
        <BuildControls />
      </React.Fragment>
    );
  }
}
