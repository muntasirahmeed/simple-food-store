import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    const { name, price, image } = cart;
    console.log(cart)
    return (
      <div className="cart">
        <img src={image} alt="" />
        <div className='ms-2'>
                <p className="text-white m-0">{name}</p>
                <p className='text-white m-0'>Price: ${ price}</p>
        </div>
      </div>
    );
};

export default Cart;