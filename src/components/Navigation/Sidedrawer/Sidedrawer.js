import React, { Component } from "react";
import classes from "./Sidedrawer.module.css";
import SideDrawerItems from "./SideDrawerItems/SideDrawerItems";
import SubMenu from "./SubMenu/SubMenu";

export default class Sidedrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuObj: [
        {
          id: 1,
          title: "menu",
          isOpen: false,
          submenu: {
            subTitles: ["pizzas", "starters", "more", "deals"],
            links: ["/", "/", "/", "/"]
          }
        },
        {
          id: 2,
          title: "my account",
          isOpen: false,
          submenu: {
            subTitles: ["login", "register"],
            links: ["/", "/"]
          }
        },

        {
          id: 3,
          title: "customer service",
          isOpen: false,
          submenu: {
            subTitles: [
              "Discounts",
              "BirthDay Reservation",
              " Contact Us",
              "Find A Pizza Hut",
              "Track Your Order",
              "FAQs",
              "Become A Franchisee"
            ],
            links: ["/", "/", "/", "/", "/", "/"]
          }
        }
      ]
    };
  }

  handleSubmenu = (id, index) => {
    let menuObjCopy = this.state.menuObj.slice();

    menuObjCopy[index] = Object.assign({}, menuObjCopy[index]);
    menuObjCopy[index].isOpen = !menuObjCopy[index].isOpen;

    this.setState({ menuObj: menuObjCopy });
  };

  render() {
    let sideMenu = this.state.menuObj.map((obj, index) => {
      return (
        <SideDrawerItems
          key={obj.id}
          index={index}
          id={obj.id}
          header={obj.title}
          toggle={this.handleSubmenu}
          open={obj.isOpen}
        >
          <SubMenu open={obj.isOpen}>
            {obj.submenu.subTitles.map((sub, index) => (
              <li key={sub + index}>
                <a href={obj.submenu.links[index]}>{sub}</a>
              </li>
            ))}
          </SubMenu>
        </SideDrawerItems>
      );
    });
    let sideDrawerStyle = this.props.open
      ? { transform: "translateX(0)" }
      : { transform: "translateX(-100%)" };
    return (
      <div
        className={[classes.Sidedrawer, "accordion"].join(" ")}
        style={sideDrawerStyle}
      >
        {sideMenu}
      </div>
    );
  }
}
