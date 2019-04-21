import React, { Component } from "react";
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

export default class OrderSummary extends Component {
  componentWillUpdate() {
    console.log("[ordersummary]-willupdate");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(ig => {
      if (this.props.ingredients[ig] === true) {
        return (
          <tr key={ig} style={{ color: "white", cursor: "pointer" }}>
            <td>{ig}</td>
            <td>${INGREDIENT_PRICES[ig]}</td>
            <td>
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => this.props.ingredientRemoved(ig)}
                style={{ color: "#ED1C24", cursor: "pointer" }}
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
              <td colSpan="2">${this.props.panSizePrice}</td>
            </tr>
            <tr>
              <td
                colSpan="3"
                style={{
                  textAlign: "right",
                  color: "#ffd700",
                  fontWeight: 500
                }}
              >
                Sub-Total
                <span style={{ margin: "10px" }}>
                  ${this.props.currentPrice + this.props.panSizePrice}
                </span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">
                <Button
                  style={{
                    backgroundColor: "#ED1C24",
                    outline: "none",
                    border: "none"
                  }}
                  onClick={() => this.props.purchaseCheckout()}
                >
                  Checkout
                </Button>
              </td>
              <td colSpan="2">
                <Button
                  style={{
                    backgroundColor: "#ED1C24",
                    outline: "none",
                    border: "none"
                  }}
                  onClick={() => this.props.purchaseCancelled()}
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
}
