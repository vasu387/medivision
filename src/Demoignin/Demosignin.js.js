import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIN.css';

const Demosignin = () => {
  return (
    <div className="zenin-wrapper">
      <div className="zenin-box">
        <h2 className="zenin-title">Welcome Back</h2>
        <form className="zenin-form">
          <input type="email" placeholder="Email" className="zenin-input" />
          <input type="password" placeholder="Password" className="zenin-input" />
          <button type="submit" className="zenin-button">Sign In</button>
        </form>
        <p className="zenin-note">Don't have an account? <a href="/signup" className="zenin-link">Sign Up</a></p>
      </div>
    </div>
  );
};

export default Demosignin;
