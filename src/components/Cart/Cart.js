import React from "react";
import { Link } from "react-router-dom";

import classes from "./Cart.module.css";
import cartLogo from "../../assets/images/shopping-cart.png";

function Cart(props) {
  return (
    <Link
      className={classes.Cart}
      to={{
        pathname: "/shoppingCart",
        state: { cart: props.cart }
      }}
    >
      <img src={cartLogo} style={{ height: "18px" }} alt="shopping_cart" />
      &#40;{props.cartAmount}&#41;
    </Link>
  );
}

export default Cart;
