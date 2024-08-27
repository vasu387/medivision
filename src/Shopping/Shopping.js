import React, { useState } from 'react';
import './Shopping.css';
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
import { useNavigate } from 'react-router-dom';

function Shopping() {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    { name: 'Meditation mat', price: '466', image: ima1 },
    { name: 'Meditation Dress', price: '500', image: ima2 },
    { name: 'Fitness Watch', price: '347', image: ima3 },
    { name: 'Meditation', price: '189', image: ima4 },
    { name: 'The power of NOW', price: '450', image: ima5 },
    { name: 'Equanimous Mind', price: '700', image: ima6 },
    { name: 'Meditation for kids', price: '1500', image: ima7 },
    { name: 'eSplanade', price: '900', image: ima8 },
    { name: 'Untethered Soul', price: '250', image: ima9 },
    { name: 'Insight meditation', price: '950', image: ima10 },
    { name: 'Meditation cushion', price: '799', image: ima11 },
    { name: 'Miracle of Mindfulness', price: '999', image: ima12 },
  ];

  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex((item) => item.name === product.name);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity++;
      updatedCart[existingItemIndex].totalPrice =
        updatedCart[existingItemIndex].quantity * updatedCart[existingItemIndex].price;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1, totalPrice: product.price }]);
    }
    alert(`${product.name} added to cart`);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.name !== product.name);
    setCart(updatedCart);
    alert(`${product.name} removed from cart`);
  };

  const handleQuantityChange = (product, action) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex((item) => item.name === product.name);
    if (action === 'increment') {
      updatedCart[index].quantity++;
      updatedCart[index].totalPrice = updatedCart[index].quantity * updatedCart[index].price;
    } else if (action === 'decrement' && updatedCart[index].quantity > 1) {
      updatedCart[index].quantity--;
      updatedCart[index].totalPrice = updatedCart[index].quantity * updatedCart[index].price;
    }
    setCart(updatedCart);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navi = useNavigate();
  const handlepay = () => {
    navi("/payment");
  };

  return (
    <div className="page">
      <h1 className='shophead'>MediShopping🛒</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for products🔍"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Meditation Products</h2>
      <div className="product-container">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.name}>
            <div className="product-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">₹{product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-container">
        <h2>Cart</h2>
        {cart.map((item) => (
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
        ))}
        {cart.length > 0 && <button className="checkout-button" onClick={handlepay}>Checkout</button>}
        {cart.length === 0 && <p>Cart is empty</p>}
      </div>
    </div>
  );
}

export default Shopping;
