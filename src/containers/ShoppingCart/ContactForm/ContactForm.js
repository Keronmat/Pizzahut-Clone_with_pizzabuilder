import React, { Component } from "react";
import axios from "../../../axios-orders";

import classes from "./ContactForm.module.css";
import Input from "../../../components/UI/Input/Input";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderForm: {
        city: {
          label: "Select City",
          elementType: "select",
          elementConfig: {
            options: [
              { value: "", displayValue: "Select City", disabled: true },
              { value: "Kingstown", displayValue: "Kingstown" }
            ]
          },
          value: "",
          validation: {
            required: true
          },
          valid: true
        },

        area: {
          label: "Select Area",
          elementType: "select",
          elementConfig: {
            options: [
              { value: "", displayValue: "-- Select area --", disabled: true },
              { value: "StDavid", displayValue: "St. David" }
            ]
          },
          value: "",
          validation: {
            required: true
          },
          valid: true
        },
        subArea: {
          label: "Select Sub Area",
          elementType: "select",
          elementConfig: {
            options: [
              { value: "", displayValue: "Select Sub Area", disabled: true },
              { value: "PetitBordel", displayValue: "Petit Bordel" }
            ]
          },
          value: "",
          validation: {
            required: true
          },
          valid: true
        },
        deliveryAddress: {
          label: "Delivery Address",
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Enter your Delivery Address"
          },
          value: "",
          validation: {
            required: true,
            minLength: 3,
            maxLength: 20
          },
          valid: false,
          touched: false
        },
        telephone: {
          label: "Mobile No",
          elementType: "input",
          elementConfig: {
            type: "tel",
            placeholder: "Enter your mobile no."
          },
          value: "",
          validation: {
            required: true,
            minLength: 7,
            maxLength: 12,
            pattern: /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/
          },
          valid: false,
          touched: false
        }
      },
      paymentForm: {
        paymentOption: {
          elementType: "select",
          elementConfig: {
            options: [
              { value: "", displayValue: "Select an option", disabled: true },
              { value: "payWithCash", displayValue: "Pay With Cash" },
              { value: "payWithCard", displayValue: "Pay With Card" }
            ]
          },
          value: "",
          validation: {
            required: true
          },
          valid: true
        }
      },
      formIsValid: false,
      paymentFormIsValid: false,
      loading: false
    };
  }

  confirmOrderHandler = e => {
    e.preventDefault();

    if (this.props.cartTotal < 6) {
      alert("Minimum order amount is $6.00. Please add more item(s)");
    } else if (!this.state.formIsValid || !this.state.paymentFormIsValid) {
      alert("Please ensure all fields are filled");
    } else {
      this.setState({ loading: true });

      const formData = {};
      for (let formElementIdentifier in this.state.orderForm) {
        formData[formElementIdentifier] = this.state.orderForm[
          formElementIdentifier
        ].value;
      }
      //console.log(formData);
      const order = {
        cart: this.props.cart,
        totalPrice: this.props.cartTotal,
        customerData: formData,
        paymentMethod: this.state.paymentForm.paymentOption.value
      };

      axios
        .post("/orders.json", order)
        .then(response => this.setState({ loading: false }))
        .catch(error => this.setState({ loading: false }));
    }
  };

  checkValidity = (value, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    if (rules.pattern) {
      isValid = rules.pattern.test(value);
    }
    console.log(isValid);
    return isValid;
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = { ...this.state.orderForm };

    const updatedFormElement = { ...updatedOrderForm[inputIdentifier] };

    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    console.log(formIsValid);
    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
  };

  pyamentFormHandler = (event, inputIdentifier) => {
    const updatedPaymentForm = { ...this.state.paymentForm };

    const updatedFormElement = { ...updatedPaymentForm[inputIdentifier] };

    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedPaymentForm[inputIdentifier] = updatedFormElement;
    let paymentFormIsValid = true;
    for (let inputIdentifier in updatedPaymentForm) {
      paymentFormIsValid =
        updatedPaymentForm[inputIdentifier].valid && paymentFormIsValid;
    }
    console.log(paymentFormIsValid);
    this.setState({
      paymentForm: updatedPaymentForm,
      paymentFormIsValid: paymentFormIsValid
    });
  };

  render() {
    const formElementArray = [];

    for (let key in this.state.orderForm) {
      formElementArray.push({ id: key, config: this.state.orderForm[key] });
    }

    let billingForm = (
      <form>
        <div className="form-row">
          {formElementArray.map(formElement => {
            //console.log(formElement.config.validation.required);
            return (
              <Input
                key={formElement.id}
                label={formElement.config.label}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                touched={formElement.config.touched}
                shouldValidate={formElement.config.validation}
                required={formElement.config.validation.required}
                changed={event =>
                  this.inputChangedHandler(event, formElement.id)
                }
              />
            );
          })}
        </div>
      </form>
    );
    const paymentFormArray = [];
    for (let key in this.state.paymentForm) {
      paymentFormArray.push({ id: key, config: this.state.paymentForm[key] });
    }
    let paymentForm = (
      <div className={[classes.col, "col-6"].join(" ")}>
        {paymentFormArray.map(formElement => (
          <Input
            key={formElement.id}
            label={formElement.config.label}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            required={formElement.config.validation.required}
            touched={formElement.config.touched}
            changed={event => this.pyamentFormHandler(event, formElement.id)}
          />
        ))}
      </div>
    );
    if (this.state.loading) {
      billingForm = <Spinner />;
      paymentForm = <Spinner />;
    }
    return (
      <React.Fragment>
        <div
          className={[
            classes.ContactFormInput,
            "col-md-8 col-sm-8 col-xs-12"
          ].join(" ")}
        >
          <h3>Billing Information</h3>
          {billingForm}
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

            {paymentForm}
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
                disabled={
                  !this.state.formIsValid && !this.state.paymentFormIsValid
                }
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
