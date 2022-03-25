import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Meal from "../Meal/Meal";
import "./Foods.css";
const Foods = () => {
  const [foods, setFoods] = useState([]);
  const [carts, setCart] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  const addToCart = (meal) => {
      const newCart = [...carts, meal];
      if (newCart.length > 4 ) {
          return;
      }
    setCart(newCart);
  };
  return (
    <div className="container">
      <div className="foods-container row g-0">
        <div className="meal-container col-md-10 col-12">
          {foods.map((meal) => (
            <Meal meal={meal} addToCart={addToCart} key={meal.id}></Meal>
          ))}
        </div>
        <div className="cart-container col-md-2 col-12 ">
          <h2 className="text-center text-white">Order Food</h2>
          <p className="text-center text-white">
            Selected Item : {carts.length}{" "}
          </p>
          {carts.map((cart) => (
            <Cart cart={cart} key={cart.id}></Cart>
          ))}
          <div className="d-flex justify-content-evenly mt-3">
            <button className="btn btn-warning">Chose One</button>
            <button className="btn btn-danger">Again</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foods;
