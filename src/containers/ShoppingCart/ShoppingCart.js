import React, { Component } from "react";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { Route } from "react-router-dom";

import ContactForm from "../ContactForm/ContactForm";
import CartItemsTable from "../../components/Cart/CartComponents/CartItemsTable";
import Coupon from "../../components/Cart/CartComponents/Coupon";
import classes from "./ShoppingCart.module.css";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      loading: true
    };
  }
  componentDidMount() {
    this.getCartData();
  }

  getCartData = () => {
    axios
      .get("/cartItems.json")
      .then(response => {
        const fetchedItems = [];
        for (let key in response.data) {
          fetchedItems.push({ ...response.data[key], id: key });
        }

        this.setState({ cart: fetchedItems, loading: false }, () =>
          console.log(this.state.cart)
        );
      })
      .catch(error => this.setState({ loading: false }));
  };

  checkoutCancelled = e => {
    e.preventDefault();
    this.props.history.goBack();
  };

  checkoutContinued = e => {
    e.preventDefault();
    this.props.history.replace("./shoppingCart/contact-data");
  };

  render() {
    return (
      <React.Fragment>
        <div className={[classes.Cart, "row"].join(" ")}>
          <div
            className={[classes.CartItems, "col-md-8 col-sm-8 col-xs-12"].join(
              " "
            )}
          >
            <CartItemsTable
              checkoutCancelled={this.checkoutCancelled}
              checkoutContinued={this.checkoutContinued}
              cart={this.state.cart}
            />
          </div>
          <div
            className={[classes.Coupon, "col-md-3 col-sm-3 col-xs-12"].join(
              " "
            )}
          >
            <Coupon />
          </div>
        </div>
        <div className={[classes.BillingForm, "row"].join(" ")}>
          <Route
            path={this.props.match.path + "/contact-data"}
            render={() => <ContactForm {...this.props} />}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default withErrorHandler(ShoppingCart, axios);
