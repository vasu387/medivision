import React, { useState } from 'react';
import './Shopping.css';
import { useNavigate } from 'react-router-dom';

import ima1 from '../Imagehome/medi1.webp';
import ima2 from '../Imagehome/medi2sized.jpg';
import ima3 from '../Imagehome/medi3.jpeg';
import ima4 from '../Imagehome/medi4.jpeg';
import ima5 from '../Imagehome/medi5.jpeg';
import ima6 from '../Imagehome/medi6.jpg';
import ima7 from '../Imagehome/medi7.jpg';
import ima8 from '../Imagehome/medi8.jpeg';
import ima9 from '../Imagehome/medi9.jpeg';
import ima10 from '../Imagehome/medi10.jpeg';
import ima11 from '../Imagehome/medi11.jpeg';
import ima12 from '../Imagehome/medi12.jpg';

function Shopping() {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const products = [
    { name: 'Meditation mat', price: 466, image: ima1 },
    { name: 'Meditation Dress', price: 500, image: ima2 },
    { name: 'Fitness Watch', price: 347, image: ima3 },
    { name: 'Meditation', price: 189, image: ima4 },
    { name: 'The power of NOW', price: 450, image: ima5 },
    { name: 'Equanimous Mind', price: 700, image: ima6 },
    { name: 'Meditation for kids', price: 1500, image: ima7 },
    { name: 'eSplanade', price: 900, image: ima8 },
    { name: 'Untethered Soul', price: 250, image: ima9 },
    { name: 'Insight meditation', price: 950, image: ima10 },
    { name: 'Meditation cushion', price: 799, image: ima11 },
    { name: 'Miracle of Mindfulness', price: 999, image: ima12 },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (product) => {
    const index = cart.findIndex((item) => item.name === product.name);
    const newCart = [...cart];

    if (index !== -1) {
      newCart[index].quantity++;
      newCart[index].totalPrice = newCart[index].quantity * newCart[index].price;
    } else {
      newCart.push({ ...product, quantity: 1, totalPrice: product.price });
    }

    setCart(newCart);
    alert(`${product.name} added to cart`);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.name !== product.name));
    alert(`${product.name} removed from cart`);
  };

  const handleQuantityChange = (product, action) => {
    const newCart = [...cart];
    const index = newCart.findIndex((item) => item.name === product.name);

    if (action === 'increment') {
      newCart[index].quantity++;
    } else if (action === 'decrement' && newCart[index].quantity > 1) {
      newCart[index].quantity--;
    }

    newCart[index].totalPrice = newCart[index].quantity * newCart[index].price;
    setCart(newCart);
  };

  const handleCheckout = () => navigate('/payment');

  return (
    <div className="zenpage-container">
      <h1 className="zenpage-header">MediShopping 🛒</h1>

      <div className="zenpage-searchbar">
        <input
          type="text"
          placeholder="Search for products 🔍"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Meditation Products</h2>

      <div className="zenpage-product-grid">
        {filteredProducts.map((product) => (
          <div className="zenproduct-card" key={product.name}>
            <div className="zenproduct-image-wrapper">
              <img src={product.image} alt={product.name} className="zenproduct-image" />
            </div>
            <div className="zenproduct-info">
              <h3 className="zenproduct-title">{product.name}</h3>
              <p className="zenproduct-price">₹{product.price}</p>
              <button className="zenproduct-button" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="zencart-container">
        <h2 className="zencart-title">Cart</h2>
        {cart.length === 0 && <p>Cart is empty</p>}

        {cart.map((item) => (
          <div className="zencart-item" key={item.name}>
            <img src={item.image} alt={item.name} className="zencart-image" />
            <div className="zencart-info">
              <h3 className="zencart-title-small">{item.name}</h3>
              <p className="zencart-price">Price: ₹{item.price}</p>
              <div className="zencart-quantity-controls">
                <button onClick={() => handleQuantityChange(item, 'decrement')}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item, 'increment')}>+</button>
              </div>
              <p className="zencart-price">Total: ₹{item.totalPrice}</p>
              <button className="zencart-remove-button" onClick={() => removeFromCart(item)}>
                Remove
              </button>
            </div>
          </div>
        ))}

        {cart.length > 0 && (
          <button className="zencheckout-button" onClick={handleCheckout}>
            Checkout
          </button>
        )}
      </div>
    </div>
  );
}

export default Shopping;
