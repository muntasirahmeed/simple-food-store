import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Meal.css";
const Meal = ({ meal }) => {
  const { name, image, price } = meal;
  console.log(meal);
  return (
    <div className="meal   mt-3 ">
      <div className="meal-img">
        <img src={image} alt="" />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <p>Price : ${price}</p>
        <button className="btn btn-success">
          Add to Cart
          <span>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Meal;
