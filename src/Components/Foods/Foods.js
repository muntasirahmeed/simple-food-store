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
    let newCart = [];
    if (!carts.includes(meal)) {
      if (carts.length < 4) {
        newCart=[...carts,meal]
      }
      
    } else {
      return;
    }
    setCart(newCart);
  };
  function choseOne() {
    if (carts.length === 0) {
      return;
    } else {
      const randomFood = carts[Math.floor(Math.random() * carts.length)];
      setCart([randomFood]);
    }
  }
  const removeAllItems = () => {
    setCart([]);
  };
  return (
    <div className="container">
      <div className="foods-container ">
        <div className="meal-container ">
          {foods.map((meal) => (
            <Meal meal={meal} addToCart={addToCart} key={meal.id}></Meal>
          ))}
        </div>
        <div className="cart-container">
          <h2 className="text-center text-white">Order Food</h2>
          <p className="text-center text-white">
            Selected Item : {carts.length}{" "}
          </p>
          <div id="cart">
            {carts.map((cart) => (
              <Cart cart={cart} key={cart.id}></Cart>
            ))}
          </div>
          <div className="d-flex justify-content-evenly mt-3">
            <button onClick={() => choseOne(carts)} className="btn btn-warning">
              Chose One
            </button>
            <button onClick={removeAllItems} className="btn btn-danger">
              Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foods;
