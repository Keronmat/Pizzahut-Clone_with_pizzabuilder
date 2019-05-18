import React from "react";
import Button from "./Button/Button";
import classes from "./HomeButton.module.css";

function HomeButton() {
  return (
    <div className={[classes.HomeButton, "row "].join(" ")}>
      <Button link={"/"}>Pizzas</Button>
      <Button link={"/"}>Starters</Button>
      <Button link={"/"}>More</Button>
      <Button link={"/"}>Deals</Button>
    </div>
  );
}

export default HomeButton;
