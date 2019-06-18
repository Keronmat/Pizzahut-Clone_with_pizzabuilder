import React, { Component } from "react";
import { Route } from "react-router-dom";

import ContactForm from "./ContactForm/ContactForm";
import CartItemsTable from "../../components/Cart/CartComponents/CartItemsTable";
import Coupon from "../../components/Cart/CartComponents/Coupon";
import classes from "./ShoppingCart.module.css";

class ShoppingCart extends Component {
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
              cart={this.props.cart}
              cartSubtotal={this.props.cartSubtotal}
              cartTax={this.props.cartTax}
              cartDisCountPercent={this.props.cartDisCountPercent}
              cartDisCountDollars={this.props.cartDisCountDollars}
              cartTotal={this.props.cartTotal}
              removeCartItemHandler={this.props.removeCartItemHandler}
              handleQuantityChange={this.props.handleQuantityChange}
              quantityValue={this.props.quantityValue}
            />
          </div>
          <div
            className={[classes.Coupon, "col-md-3 col-sm-3 col-xs-12"].join(
              " "
            )}
          >
            <Coupon
              couponHandler={this.props.couponHandler}
              couponInput={this.props.couponInput}
              handleCouponInputChange={this.props.handleCouponInputChange}
            />
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

export default ShoppingCart;
