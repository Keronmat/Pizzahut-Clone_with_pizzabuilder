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
      coupons: [], // test codes xyc123 and abcde
      couponInput: "",
      cartAmount: 0,
      loading: true,
      cartSubtotal: 0,
      cartTax: 0,
      cartDisCountPercent: 0,
      cartDisCountDollars: 0,
      cartTotal: 0,
      quantityValue: [],
      quantityPrice: []
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

    this.setState({
      cartSubtotal: cartSub.toFixed(2),
      cartTax: tax.toFixed(2),
      cartDisCountDollars: discount.toFixed(2),
      cartTotal: total.toFixed(2)
    });
  };

  getCartData = () => {
    //get the items in the cart from firebase/server
    axios
      .get("/cartItems.json")
      .then(response => {
        const fetchedItems = []; //initiate a variable empty array
        const priceArr = []; //create an array that stores the original price for each item added to the cart with their ID

        for (let key in response.data) {
          //loop through the cart
          fetchedItems.push({ ...response.data[key], id: key }); //push all items in the empty array with new id
          priceArr.push({ id: key, price: response.data[key].price });
        }

        this.setState(
          {
            cart: fetchedItems,
            cartAmount: fetchedItems.length,
            quantityPrice: [...this.state.quantityPrice, ...priceArr],
            loading: false
          },
          () => console.log(priceArr)
        );
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

        this.setState({
          coupons: cpItems,
          loading: false
        });
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

  removeCartItemHandler = id => {
    const { cart, cartSubtotal, cartAmount } = this.state;
    const updatedCart = [...cart];

    const newCart = updatedCart.filter(item => item.id !== id);

    const selectedItem = updatedCart.find(item => item.id === id); //use the id to find the item we are target
    const index = updatedCart.indexOf(selectedItem); //find the index of the product
    const item = updatedCart[index]; // use the index to get the exact product

    const priceDeduction = item.price;
    const newPrice = cartSubtotal - priceDeduction;
    const amountInCart = cartAmount > 0 ? cartAmount - 1 : 0;

    this.setState(
      {
        cartSubtotal: newPrice.toFixed(2),
        cart: newCart,
        cartAmount: amountInCart
      },
      () => console.log(cart, cartSubtotal, id)
    );
    axios
      .delete(`/cartItems/${id}.json`)
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));
  };

  handleQuantityChange = (event, id) => {
    const { quantityPrice, quantityValue, cart } = this.state;
    //receive quantity value  from select form
    const options = event.target.options;

    var value = 1; //set quantity value to 1
    for (var i = 0; i < options.length; i++) {
      //loop through all the options
      if (options[i].selected) {
        // if the option is selected then give us the value
        value = options[i].value; //set value to options value
      }
    }
    let tempCart = [...cart]; //copy items in the cart

    const selectedPoduct = tempCart.find(item => item.id === id); //use the id to find the item we are target
    const index = tempCart.indexOf(selectedPoduct); //find the index of the product
    const product = tempCart[index]; // use the index to get the exact product

    let oldPrice = 0;
    for (let i = 0; i < quantityPrice.length; i++) {
      if (quantityPrice[i].id === product.id) {
        oldPrice = quantityPrice[i].price;
        console.log(oldPrice);
      }
    }

    product.quantity = value;
    product.price = product.quantity * oldPrice;

    this.setState(
      {
        quantityValue: [...quantityValue],
        cart: [...tempCart]
      },
      () => console.log(quantityPrice, oldPrice)
    );
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
                  removeCartItemHandler={this.removeCartItemHandler}
                  handleQuantityChange={this.handleQuantityChange}
                  quantityValue={this.state.quantityValue}
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
