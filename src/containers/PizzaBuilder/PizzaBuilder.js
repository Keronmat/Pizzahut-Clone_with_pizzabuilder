import React, { Component } from "react";
import Pizza from "../../components/Pizza.js/Pizza";

export default class PizzaBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: [
        "pepperoni",
        "sausage",
        "ham",
        "mushrooms",
        "peppers",
        "onions",
        "pineapple",
        "jalapenos"
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <Pizza ingredients={this.state.ingredients} />
        <div>Pizza Controls</div>
      </React.Fragment>
    );
  }
}
