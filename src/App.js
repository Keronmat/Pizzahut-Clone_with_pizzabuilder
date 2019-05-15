import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import PizzaBuilder from "./containers/PizzaBuilder/PizzaBuilder";
import ShoppingCart from "./containers/ShoppingCart/ShoppingCart";
import Homepage from "./containers/Homepage/Homepage";

class App extends Component {
  render() {
    return (
      <div className="container-fixed">
        <Layout>
          <Switch>
            <Route path="/homepage" component={Homepage} />
            <Route path="/shoppingCart" component={ShoppingCart} />
            <Route path="/" exact component={PizzaBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
