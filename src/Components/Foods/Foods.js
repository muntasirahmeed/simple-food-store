import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import './Foods.css'
const Foods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className="container">
      <div className="foods-container row g-0">
        <div className="meal-container col-md-10 col-12">
          {foods.map((meal) => (
            <Meal meal={meal} key={meal.id}></Meal>
          ))}
        </div>
              <div className="cart-container col-md-2 col-12">
                <h2>Order Food</h2>
              </div>
      </div>
    </div>
  );
};

export default Foods;
