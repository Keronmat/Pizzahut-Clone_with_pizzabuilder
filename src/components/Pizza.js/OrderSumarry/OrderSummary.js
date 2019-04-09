import React from "react";
import { Button, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
        <tr key={ig} style={{ color: "white", cursor: "pointer" }}>
          <td>{ig}</td>
          <td>${INGREDIENT_PRICES[ig]}</td>
          <td>
            <FontAwesomeIcon
              icon={faTimes}
              onClick={() => props.ingredientRemoved(ig)}
              style={{ color: "red", cursor: "pointer" }}
            />
          </td>
        </tr>
      );
    }
    return ingredientSummary;
  });

  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <Table responsive>
        <thead className="thead-dark">
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Price</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {ingredientSummary}
          <tr style={{ color: "white" }}>
            <td>Pan Size</td>
            <td colSpan="2">${props.panSizePrice}</td>
          </tr>
          <tr>
            <td
              colSpan="3"
              style={{ textAlign: "right", color: "#dad735", fontWeight: 500 }}
            >
              Sub-Total
              <span style={{ margin: "10px" }}>
                ${props.currentPrice + props.panSizePrice}
              </span>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">
              <Button variant="danger" onClick={() => props.purchaseCheckout()}>
                Checkout
              </Button>
            </td>
            <td colSpan="2">
              <Button
                variant="danger"
                onClick={() => props.purchaseCancelled()}
              >
                Continue
              </Button>
            </td>
          </tr>
        </tfoot>
      </Table>
    </React.Fragment>
  );
}

export default OrderSummary;
