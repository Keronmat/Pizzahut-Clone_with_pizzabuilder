import React, { Component } from "react";
import classes from "./layoutStyles.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Sidedrawer from "../../components/Navigation/Sidedrawer/Sidedrawer";

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSideDrawer: false
    };
  }
  menuToggler = () => {
    this.setState(prevState => ({ showSideDrawer: !prevState.showSideDrawer }));
    console.log(this.state);
  };
  render() {
    return (
      <React.Fragment>
        <Toolbar
          menuToggler={this.menuToggler}
          openSidedrawer={this.state.showSideDrawer}
        />
        <Sidedrawer open={this.state.showSideDrawer} />
        <main className={classes.Content}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}
