import React from 'react';
import  { useNavigate } from 'react-router-dom';
import './Demosignup.css';

const Demosignup = () => {
  return (
    <div className="zenup-wrapper">
      <div className="zenup-box">
        <h2 className="zenup-title">Create Account</h2>
        <form className="zenup-form">
          <input type="text" placeholder="Full Name" className="zenup-input" />
          <input type="email" placeholder="Email" className="zenup-input" />
          <input type="password" placeholder="Password" className="zenup-input" />
          <button type="submit" className="zenup-button">Sign Up</button>
        </form>
        <p className="zenup-note">Already have an account? <a href="/signin" className="zenup-link">Sign In</a></p>
      </div>
    </div>
  );
};

export default Demosignup;
