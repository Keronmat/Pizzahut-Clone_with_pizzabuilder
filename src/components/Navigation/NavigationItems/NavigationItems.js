import React, { Component } from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem, {
  NavigationItemDropdown
} from "./NavigationItem/NavigationItem";
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
    /*this.setState(prevState => ({
      pizzaDropdownOpen: !prevState.pizzaDropdownOpen
    }));*/
    this.setState({ pizzaDropdownOpen: true });
    console.log(this.state);
  };

  handleClose = () => {
    this.setState({ pizzaDropdownOpen: false });
  };
  render() {
    return (
      <ul className={[classes.NavigationItems, "nav navbar-nav"].join(" ")}>
        <NavigationItemDropdown
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
        >
          Pizza
          <FontAwesomeIcon icon={faSortDown} style={{ marginLeft: "5px" }} />
          <PizzaDropdown open={this.state.pizzaDropdownOpen} />
        </NavigationItemDropdown>

        <NavigationItem link="/">Starters</NavigationItem>
        <NavigationItem link="/">More</NavigationItem>
        <DealsButton link="/">DEALS</DealsButton>
      </ul>
    );
  }
}
