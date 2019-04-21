import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import PizzaBuilder from "./containers/PizzaBuilder/PizzaBuilder";

class App extends Component {
  render() {
    return (
      <div className="container-fixed">
        <Layout>
          <PizzaBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
