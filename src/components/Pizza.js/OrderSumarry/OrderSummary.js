import React from "react";

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

function OrderSummary(props) {
  const ingredientSummary = Object.keys(props.ingredients).map(ig => {
    if (props.ingredients[ig] === true) {
      return (
        <li key={ig}>
          <span style={{ textTransform: "capitalize" }}>{ig}</span>: $
          {INGREDIENT_PRICES[ig]}
        </li>
      );
    }
  });
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious Pizza with the following ingredients:</p>
      <ul>
        <li>Pizza with no topping: $5.00</li>
        {ingredientSummary}
      </ul>
      <p>Continue to Checkout?</p>
    </React.Fragment>
  );
}

export default OrderSummary;
