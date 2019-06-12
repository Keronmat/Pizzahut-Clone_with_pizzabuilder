import React, { Component } from "react";
import axios from "../../axios-orders";

import classes from "./ContactForm.module.css";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityValue: "",
      areaValue: "",
      subAreaValue: "",
      deliveryAddress: "",
      number: "",
      paymentMode: "",
      loading: false
    };
  }
  handleCityChange = e => {
    this.setState({ cityValue: e.target.value });
  };

  handleAreaChange = e => {
    this.setState({ areaValue: e.target.value });
  };

  handleSubAreaChange = e => {
    this.setState({ subAreaValue: e.target.value });
  };

  handleDeliveryAddress = e => {
    this.setState({ deliveryAddress: e.target.value });
  };

  handlePhonenumber = e => {
    this.setState({ number: e.target.value });
  };

  handlePaymentMode = e => {
    this.setState({ paymentMode: e.target.value });
  };

  confirmOrderHandler = e => {
    e.preventDefault();

    this.setState({ loading: true });

    const order = {
      cart: this.props.cart,
      price: this.props.cartTotal,
      customer: {
        address: {
          city: this.state.cityValue,
          area: this.state.areaValue,
          subArea: this.state.subAreaValue,
          address: this.state.deliveryAddress
        },
        number: this.state.number
      },
      paymentMethod: this.state.paymentMode
    };
    axios
      .post("/orders.json", order)
      .then(response => this.setState({ loading: false }))
      .catch(error => this.setState({ loading: false }));
  };

  render() {
    return (
      <React.Fragment>
        <div
          className={[
            classes.ContactFormInput,
            "col-md-8 col-sm-8 col-xs-12"
          ].join(" ")}
        >
          <h3>Billing Information</h3>
          <form>
            <div className="form-row">
              <div className="form-group col-md-6 col-sm-6 col-xs-12">
                <label htmlFor="city">Select City</label>
                <select
                  className="form-control"
                  id="city"
                  value={this.state.cityValue}
                  onChange={event => this.handleCityChange(event)}
                >
                  <option defaultValue="Select City">Select City</option>
                  <option value="...">...</option>
                </select>
              </div>
              <div className="form-group col-md-6 col-sm-6 col-xs-12">
                <label htmlFor="area">Select Area</label>
                <select
                  className="form-control"
                  id="area"
                  value={this.state.areaValue}
                  onChange={event => this.handleAreaChange(event)}
                >
                  <option defaultValue="Select Area">Select Area</option>
                  <option value="...">...</option>
                </select>
              </div>
              <div className="form-group col-md-6 col-sm-6 col-xs-12">
                <label htmlFor="subArea">Select Sub Area</label>
                <select
                  className="form-control"
                  id="subArea"
                  value={this.state.subAreaValue}
                  onChange={event => this.handleSubAreaChange(event)}
                >
                  <option defaultValue="Select Sub Area">
                    Select Sub Area
                  </option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-6 col-sm-6 col-xs-12">
                <label htmlFor="address">Delivery Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Enter your address"
                  value={this.state.deliveryAddress}
                  onChange={event => this.handleDeliveryAddress(event)}
                />
              </div>
              <div className="form-group col-md-6 col-sm-6 col-xs-12">
                <label htmlFor="number">Mobile No.</label>
                <input
                  type="text"
                  className="form-control"
                  id="number"
                  value={this.state.number}
                  placeholder="Enter your mobile no."
                  onChange={event => this.handlePhonenumber(event)}
                />
              </div>
            </div>
          </form>
        </div>
        <div
          className={[classes.PaymentMode, "col-md-8 col-sm-8 col-xs-12"].join(
            " "
          )}
        >
          <div className="row">
            <div className={[classes.col, "col-6"].join(" ")}>
              <h3>Payment Mode</h3>
            </div>
            <div className={[classes.col, "col-6"].join(" ")}>
              <select
                className="form-control"
                value={this.state.paymentMode}
                onChange={event => this.handlePaymentMode(event)}
              >
                <option defaultValue="Select an option">
                  Select an option
                </option>
                <option value="payWithCash">Cash on delivery</option>
                <option value="payWithCard">Pay with Card</option>
              </select>
            </div>
          </div>
        </div>
        <div
          className={[
            classes.ConfirmOrderButton,
            "col-md-8 col-sm-8 col-xs-12"
          ].join(" ")}
        >
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3 col-sm-offset-1 ">
              <button
                className="btn btn-block"
                onClick={event => this.confirmOrderHandler(event)}
              >
                confirm my Order
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ContactForm;
