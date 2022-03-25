import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    const { name, price, image } = cart;
    const newName = (name.length <= 12) ? name: name.slice(0,12)+'..'
    return (
      <div className="cart">
        <img src={image} alt="" />
        <div className='ms-2'>
                <p className="text-white m-0">{newName}</p>
                <p className='text-white m-0'>Price: ${ price}</p>
        </div>
      </div>
    );
};

export default Cart;