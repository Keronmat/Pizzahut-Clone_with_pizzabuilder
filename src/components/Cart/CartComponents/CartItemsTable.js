import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import classes from "./CartItems.module.css";

export default class CartItemsTable extends Component {
  render() {
    let tableDetail = null;
    //console.log(this.state.cartSubtotal);

    if (this.props.cart) {
      tableDetail = this.props.cart.map((item, index) => {
        //  console.log(item);
        return (
          <tr
            className={classes.tableRow}
            key={item.id}
            style={{ color: "white", cursor: "pointer" }}
          >
            <td>
              <p>Pizza Builder: {item.size}</p>
              <ul>
                {Object.keys(item.ingredients).map(ig => {
                  if (item.ingredients[ig]) {
                    return <li key={ig}>{ig}</li>;
                  }
                })}
              </ul>
            </td>
            <td>
              <form className={classes.cartForm}>
                <select
                  value={this.props.quantityValue}
                  onChange={event => {
                    this.props.handleQuantityChange(event, item.id);
                    //this.props.priceToggler(item.id);
                  }}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </form>
            </td>
            <td>${item.price}</td>
            <td>
              <button onClick={() => this.props.removeCartItemHandler(item.id)}>
                <FontAwesomeIcon
                  icon={faTimes}
                  style={{ color: "#ED1C24", cursor: "pointer" }}
                />
              </button>
            </td>
          </tr>
        );
      });
    } else {
      tableDetail = (
        <tr>
          <td
            colSpan="6"
            style={{
              textAlign: "center",
              margin: "25px",
              color: "white",
              fontSize: "14px"
            }}
          >
            {" "}
            <br /> Your Cart is empty. please add some product(s).
          </td>
        </tr>
      );
    }
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
            {tableDetail}
            <tr className={classes.sub}>
              <th colSpan="4" scope="row">
                Sub Total ${" "}
                {this.props.cartSubtotal ? this.props.cartSubtotal : "0.00"}
              </th>
            </tr>
            <tr className={classes.sub}>
              <th colSpan="4" scope="row">
                Discount ({this.props.cartDisCountPercent} % ) ${" "}
                {this.props.cartDisCountDollars}
              </th>
            </tr>

            <tr className={classes.sub}>
              <th colSpan="4" scope="row">
                Tax (13 % ) $ {this.props.cartTax ? this.props.cartTax : "0.00"}
              </th>
            </tr>
            <tr className={classes.sub}>
              <th colSpan="4" scope="row">
                Delivery Charges $ 0
              </th>
            </tr>
            <tr className={classes.sub}>
              <th colSpan="4" scope="row">
                {" "}
                Total $ {this.props.cartTotal ? this.props.cartTotal : "0.00"}
              </th>
            </tr>
          </tbody>
        </table>
        <div className="col-md-12 col-sm-12 col-xs-12 col-md-12">
          <div
            className="col-sm-5 col-xs-5 col-md-5 add-to-cart"
            style={{ float: "left", padding: 0 }}
          >
            <button onClick={e => this.props.checkoutContinued(e)}>
              Checkout
            </button>
          </div>

          <div
            className="col-sm-6 col-xs-6 col-md-6 add-to-cart"
            style={{ float: "right", padding: 0 }}
          >
            <button onClick={e => this.props.checkoutCancelled(e)}>
              {" "}
              Add More
            </button>
          </div>
        </div>
      </div>
    );
  }
}
