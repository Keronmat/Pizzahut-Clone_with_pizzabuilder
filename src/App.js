import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import PizzaBuilder from "./containers/PizzaBuilder/PizzaBuilder";
import ShoppingCart from "./containers/ShoppingCart/ShoppingCart";
import Homepage from "./containers/Homepage/Homepage";
import withErrorHandler from "./hoc/withErrorHandler/withErrorHandler";
import axios from "./axios-orders";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [], // cart reflects old state. need to udjust handler
      coupons: [],
      couponInput: "",
      cartAmount: 0,
      loading: true,
      cartSubtotal: 0,
      cartTax: 0,
      cartDisCountPercent: 0,
      cartDisCountDollars: 0,
      cartTotal: 0
    };
  }
  componentDidMount() {
    this.getCartData();
    this.getCouponData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.cart !== prevState.cart ||
      this.state.cartDisCountPercent !== prevState.cartDisCountPercent
    ) {
      this.cartHandler();
      // this.priceToggler();
    }
  }

  cartHandler = () => {
    const { cartDisCountPercent, cart } = this.state;

    let cartSub =
      cart.length >= 1
        ? cart.map(item => item.price).reduce((cur, acc) => cur + acc) // if the length of the cart is >=1 iterate and get all the prices and get the total sum
        : 0; // else return 0

    let tax = (13 / 100) * cartSub; //find 13% of the total in the cart
    let discount = (cartDisCountPercent / 100) * cartSub; //find discount % of the total in the cart
    let total = cartSub + tax - discount; //add the tax to the total price and minus the discount

    this.setState(
      {
        cartSubtotal: cartSub.toFixed(2),
        cartTax: tax.toFixed(2),
        cartDisCountDollars: discount.toFixed(2),
        cartTotal: total.toFixed(2)
      },
      console.log(this.state.cartDisCountPercent)
    );
  };

  getCartData = () => {
    //get the items in the cart from firebase/server
    axios
      .get("/cartItems.json")
      .then(response => {
        const fetchedItems = []; //initiate a variable empty array
        for (let key in response.data) {
          //loop through the cart
          fetchedItems.push({ ...response.data[key], id: key }); //push all items in the empty array with new id
        }

        this.setState({
          cart: fetchedItems,
          cartAmount: fetchedItems.length,
          loading: false
        });
      })
      .catch(error => this.setState({ loading: false }));
  };

  getCouponData = () => {
    axios
      .get("/coupons.json")
      .then(response => {
        const cpItems = [];
        for (let key in response.data) {
          cpItems.push({ ...response.data[key] });
        }

        this.setState(
          {
            coupons: cpItems,
            loading: false
          },
          () => console.log(this.state.coupons)
        );
      })
      .catch(error => this.setState({ loading: false }));
  };

  couponHandler = e => {
    e.preventDefault();
    const { coupons, couponInput } = this.state;

    let cpDiscountPercent = 0;

    for (let i = 0; i < coupons.length; i++) {
      if (coupons[i].couponCode === couponInput) {
        cpDiscountPercent = coupons[i].discount;
      }
    }

    this.setState({ cartDisCountPercent: cpDiscountPercent }, () =>
      console.log(coupons, couponInput)
    );
  };

  handleCouponInputChange = e => {
    this.setState({ couponInput: e.target.value });
  };

  render() {
    return (
      <div className="container-fixed">
        <Layout cartAmount={this.state.cartAmount}>
          <Switch>
            <Route path="/homepage" component={Homepage} />
            <Route
              path="/shoppingCart"
              render={props => (
                <ShoppingCart
                  cart={this.state.cart}
                  cartSubtotal={this.state.cartSubtotal}
                  cartTax={this.state.cartTax}
                  cartDisCountPercent={this.state.cartDisCountPercent}
                  cartDisCountDollars={this.state.cartDisCountDollars}
                  cartTotal={this.state.cartTotal}
                  couponHandler={this.couponHandler}
                  couponInput={this.state.couponInput}
                  handleCouponInputChange={this.handleCouponInputChange}
                  {...props}
                />
              )}
            />
            <Route
              path="/"
              exact
              render={props => <PizzaBuilder getCartData={this.getCartData} />}
            />
          </Switch>
        </Layout>
      </div>
    );
  }
}
export default withErrorHandler(App, axios);
