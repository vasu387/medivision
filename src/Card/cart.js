import React from 'react';
import './Cart.css';

function Cart({ cart, handleQuantityChange, removeFromCart }) {
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.name} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(item, 'decrement')}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item, 'increment')}>+</button>
              </div>
              <p>Total Price: ₹{item.totalPrice}</p>
              <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
            </div>
          </div>
        ))
      ) : (
        <p>Cart is empty</p>
      )}
      {cart.length > 0 && <button className="checkout-button">Checkout</button>}
    </div>
  );
}

export default Cart;
