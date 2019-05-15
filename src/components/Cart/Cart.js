import React from "react";
import { Link } from "react-router-dom";

import classes from "./Cart.module.css";
import cartLogo from "../../assets/images/shopping-cart.svg";

function Cart(props) {
  return (
    <Link to="/shoppingCart" className={classes.Cart}>
      <img src={cartLogo} alt="shopping_cart" />
      &#40;{0}&#41;
    </Link>
  );
}

export default Cart;
