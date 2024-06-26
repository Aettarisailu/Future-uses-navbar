import React from 'react';
import './AddCart.css';

const AddCart = () => {
  return (
    <div className="cart-container">
        <div className="empty-cart">
          <img 
            src="https://res.cloudinary.com/drevfgyks/image/upload/v1713193162/3960310_gb3v0a.jpg" 
            alt="Empty Cart" 
            className="empty-cart-image"
          />
          <p>Your cart is empty.</p>
        </div>
    </div>
  );
};

export default AddCart;
