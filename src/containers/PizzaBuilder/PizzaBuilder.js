import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import Pizza from "../../components/Pizza.js/Pizza";
import BuildControls from "../../components/Pizza.js/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Pizza.js/OrderSumarry/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios-orders";

const INGREDIENT_PRICES = {
  pepperoni: 2,
  sausage: 1,
  ham: 4,
  bacon: 3,
  chicken: 2,
  mushrooms: 1,
  peppers: 0.5,
  onions: 0.5,
  pineapple: 2,
  jalapenos: 1
};

class PizzaBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: null,
      size: "regularPan",
      panSizePrice: 5,
      currentPrice: 0,
      totalPrice: 0,
      purchasing: false,
      loading: false,
      error: false,
      cart: [],
      addedToCart: false
    };
  }

  componentDidMount() {
    this.getIngredientsData();
  }

  addIngredientHandler = type => {
    const updatedIngrdients = {
      ...this.state.ingredients
    };
    updatedIngrdients[type] = true;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.currentPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({
      currentPrice: newPrice,
      ingredients: updatedIngrdients
    });
  };

  RemoveIngredientHandler = type => {
    const { ingredients, currentPrice } = this.state;
    const updatedIngrdients = {
      ...ingredients
    };
    updatedIngrdients[type] = false;

    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = currentPrice;
    const newPrice = oldPrice - priceDeduction;

    this.setState({
      currentPrice: newPrice,
      ingredients: updatedIngrdients
    });
  };

  handleSize = event => {
    this.setState({ size: event.target.value }, function() {
      console.log(this.state.size, this.state.panSizePrice);
    });
  };

  handlePanSizePrice = () => {
    const defaultPrice =
      this.state.size === "regularPan"
        ? 5
        : this.state.size === "largePan"
        ? 8
        : this.state.size === "xlPan"
        ? 10
        : null;
    this.setState({ panSizePrice: defaultPrice });
  };

  purchaseHandler = () => {
    let total = this.state.panSizePrice + this.state.currentPrice;
    this.setState({ purchasing: true, totalPrice: total });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseCheckoutHandler = () => {
    //alert("checkout");
    //this.setState({ loading: true });
    const cartItem = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      size: this.state.size
    };
    axios
      .post("/cartItems.json", cartItem)
      .then(response => this.setState({ loading: false, purchasing: false }))
      .catch(error => this.setState({ loading: false }));

    this.setState({
      purchasing: false,
      addedToCart: true
    });

    setTimeout(() => {
      this.setState({ addedToCart: false });
    }, 1000);
    console.log(this.state.cart);
  };

  getIngredientsData = () => {
    axios
      .get("https://pizzahut-clone.firebaseio.com/ingredients.json")
      .then(response => {
        this.setState({ ingredients: response.data });
      })
      .catch(error => this.setState({ error: true }));
  };

  render() {
    let itemInCart = null;
    if (this.state.addedToCart) {
      itemInCart = (
        <Modal show>
          <FontAwesomeIcon icon={faCheck} size={"5x"} color="red" />
        </Modal>
      );
    }

    let orderSummary = null;
    let pizza = this.state.error ? (
      <p
        style={{
          textTransform: "capitalize",
          textAlign: "center",
          fontSize: "1.5em"
        }}
      >
        ingredients can't be loaded at this time
      </p>
    ) : (
      <Spinner />
    );

    if (this.state.ingredients) {
      pizza = (
        <React.Fragment>
          <Pizza ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.RemoveIngredientHandler}
            ingredients={this.state.ingredients}
            currentPrice={this.state.currentPrice}
            purchaseHandler={this.purchaseHandler}
            ordered={this.purchaseHandler}
            handleSize={this.handleSize}
            size={this.state.size}
            handlePanSizePrice={this.handlePanSizePrice}
          />
        </React.Fragment>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          currentPrice={this.state.currentPrice}
          ingredientRemoved={this.RemoveIngredientHandler}
          purchaseCheckout={this.purchaseCheckoutHandler}
          purchaseCancelled={this.purchaseCancelHandler}
          panSizePrice={this.state.panSizePrice}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <React.Fragment>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {pizza}
        {itemInCart}
      </React.Fragment>
    );
  }
}
export default withErrorHandler(PizzaBuilder, axios);
