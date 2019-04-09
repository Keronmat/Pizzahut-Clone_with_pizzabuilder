import React from "react";
import classes from "./Cart.module.css";
import cartLogo from "../../../assets/images/shopping-cart.svg";

function Cart(props) {
  return (
    <div className={classes.Cart}>
      <img src={cartLogo} />
      <p>&#91;1&#93;</p>
    </div>
  );
}

export default Cart;
