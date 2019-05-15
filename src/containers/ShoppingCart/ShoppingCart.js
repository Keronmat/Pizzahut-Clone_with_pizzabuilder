import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import CartItemsTable from "../../components/Cart/CartComponents/CartItemsTable";
import Coupon from "../../components/Cart/CartComponents/Coupon";
import classes from "./ShoppingCart.module.css";

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  checkoutCancelled = e => {
    e.preventDefault();
    this.props.history.goBack();
  };

  checkoutContinued = e => {
    e.preventDefault();
    this.props.history.replace("./checkout/contact-data");
  };

  render() {
    return (
      <div className={[classes.Cart, "row"].join(" ")}>
        <div
          className={[classes.CartItems, "col-md-8 col-sm-8 col-xs-12"].join(
            " "
          )}
        >
          <CartItemsTable
            checkoutCancelled={this.checkoutCancelled}
            checkoutContinued={this.checkoutContinued}
          />
        </div>
        <div
          className={[classes.Coupon, "col-md-3 col-sm-3 col-xs-12"].join(" ")}
        >
          <Coupon />
        </div>
      </div>
    );
  }
}
