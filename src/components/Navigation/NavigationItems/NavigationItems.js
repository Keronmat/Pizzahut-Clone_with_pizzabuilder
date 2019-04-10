import React, { Component } from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import DealsButton from "./NavigationItem/DealsButton/DealsButton";
import PizzaDropdown from "./NavigationItem/PizzaDropdown/PizzaDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

export default class NavigationItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pizzaDropdownOpen: false
    };
  }
  handleOpen = () => {
    this.setState({ isOpen: true });
    console.log(this.state);
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };
  render() {
    return (
      <ul className={[classes.NavigationItems, "nav navbar-nav"].join(" ")}>
        <NavigationItem link="#">
          Pizza
          <FontAwesomeIcon icon={faSortDown} style={{ marginLeft: "5px" }} />
          <PizzaDropdown
            onMouseEnter={this.handleOpen}
            onMouseLeave={this.handleClose}
            open={this.state.pizzaDropdownOpen}
          />
        </NavigationItem>

        <NavigationItem link="/">Starters</NavigationItem>
        <NavigationItem link="/">More</NavigationItem>
        <DealsButton link="/">DEALS</DealsButton>
      </ul>
    );
  }
}
