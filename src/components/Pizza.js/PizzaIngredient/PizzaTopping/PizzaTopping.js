import React from "react";

const PizzaTopping = ({ topping, toppingAmount }) => {
  let toppingIngredient = [];

  for (let i = 1; i <= toppingAmount; i++) {
    toppingIngredient.push(
      <div key={`${topping + i}`} className={` ${topping} ${topping}-${i} `} />
    );
  }
  console.log(toppingIngredient);
  return toppingIngredient;
};

export default PizzaTopping;
//className={`${classes[topping]} ${classes[topping]}${i}`}
