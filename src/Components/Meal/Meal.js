import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Meal.css";
const Meal = ({ meal ,addToCart}) => {
  const { name, image, price } = meal;
  return (
    <div className="meal   mt-3 ">
      <div className="meal-img">
        <img src={image} alt="" />
      </div>
      <div className="info">
        <h2 className="mt-0">{name}</h2>
        <h6 className="mb-3">Price : ${price}</h6>
        <button onClick={()=>addToCart(meal)} className="btn btn-success ">
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
