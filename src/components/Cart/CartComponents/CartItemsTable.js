import React from "react";
import classes from "./CartItems.module.css";

function CartItemsTable(props) {
  return (
    <div className={classes.Table}>
      <table>
        <thead>
          <tr>
            <th width="50%">Item</th>
            <th width="20%">Quantity</th>
            <th width="18%">Price</th>
            <th width="2%">Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              colspan="6"
              style={{
                textAlign: "center",
                margin: "25px",
                color: "white",
                fontSize: "14px"
              }}
            >
              {" "}
              <br /> Your Cart is empty. please add some product(s).
              <br />
            </td>
          </tr>

          <tr className={classes.sub}>
            <th colspan="4" scope="row">
              Sub Total $ {props.price ? props.price : "0.00"}
            </th>
          </tr>
          <tr className={classes.sub}>
            <th colspan="4" scope="row">
              Discount (0 % ) $ 0
            </th>
          </tr>

          <tr className={classes.sub}>
            <th colspan="4" scope="row">
              Tax (13 % ) $ 0.00{" "}
            </th>
          </tr>
          <tr className={classes.sub}>
            <th colspan="4" scope="row">
              Delivery Charges $ 0
            </th>
          </tr>
          <tr className={classes.sub}>
            <th colspan="4" scope="row">
              {" "}
              Total $ 0
            </th>
          </tr>
        </tbody>
      </table>
      <div className="col-md-12 col-sm-12 col-xs-12 col-md-12">
        <div
          className="col-sm-5 col-xs-5 col-md-5 add-to-cart"
          style={{ float: "left", padding: 0 }}
        >
          <button onClick={e => props.checkoutContinued(e)}>Checkout</button>
        </div>

        <div
          className="col-sm-6 col-xs-6 col-md-6 add-to-cart"
          style={{ float: "right", padding: 0 }}
        >
          <button onClick={e => props.checkoutCancelled(e)}> Add More</button>
        </div>
      </div>
    </div>
  );
}

export default CartItemsTable;
