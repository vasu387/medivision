import React, { useState } from 'react';
import './Payment.css';
import { useNavigate } from 'react-router-dom';


function Payment() {
  
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    
    console.log('Payment processed!');
  };

 
  const navigate= useNavigate(); 
  const handlepayment = ()=>
  {
    navigate("/")
    alert("your payment was successful")
  }
  return (
    <div className='playmentimage'>
   <div>

    <div className="payment-container">
      <h2 className='pay1'>Payment Page</h2>
      <form onSubmit={handlePayment}>
        <label className='card1'>
        
          Card Number:
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          
        </label>
        <label className='card1'>

          Expiry Date:
          <input
            type="text"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
          />
        </label>
        <label className='card1'>
          CVV:
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </label>
        <div className="button-container">
          <button onClick={handlepayment} type="submit">Pay Now</button>
        </div>
      </form>
      </div>
    </div>
    </div>
  );
}

export default Payment;
