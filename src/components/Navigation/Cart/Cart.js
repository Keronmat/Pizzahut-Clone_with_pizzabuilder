import React from "react";
import classes from "./Cart.module.css";
import cartLogo from "../../../assets/images/shopping-cart.svg";

function Cart(props) {
  return (
    <a href="/" className={classes.Cart}>
      <img src={cartLogo} alt="shopping_cart" />
      &#40;{0}&#41;
    </a>
  );
}

export default Cart;
