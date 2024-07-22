import React from 'react';
import './Center.css';
import { useNavigate } from 'react-router-dom';

const Center = () => {
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submission successful');
  };

  const click1 = () => {
    nav('/depresstion');
  };
  const click2 = () => {
    nav('/mentalf');
  };
  const click3 = () => {
    nav('/focus');
  };
  const click4 = () => {
    nav('/backpain');
  };
  const click5 = () => {
    nav('/enhace');
  };
  const click6 = () => {
    nav('/reduce');
  };
  const click7 = () => {
    nav('/muscle');
  };
  const click8 = () => {
    nav('/loving');
  };
  const click9 = () => {
    nav('/visual');
  };

  return (
    <div className="guideimage">
      <h2 className='helloa'>
        <center>How can I help you ?</center>
      </h2>
      <form className='centerf' onSubmit={handleSubmit}>
        <label>NAME : </label>
        <input type='text' className='input' placeholder='Name'></input>
        <br></br>
        <label>Nick Name : </label>
        <input type='text' className='input' placeholder='Nick name'></input>
        <br></br>
        <label>Email : </label>
        <input type='gmail' className='input' placeholder='Gmail'></input>
        <br></br>
        <label>Phone : </label>
        <input type='text' className='input' placeholder='phone'></input>
        <br></br>
        <label>Problems :</label>
        <div className='dropdown'>
          <button className='dropbtn'></button>
          <div className='dropdown-content'>
            <a onClick={click1}>Reduce depresstion</a>
            <a onClick={click2}>Improve Mental Health</a>
            <a onClick={click3}>Improve Focus</a>
            <a onClick={click4}>Reduce Backpain</a>
            <a onClick={click5}>Enhance self-awarness</a>
            <a onClick={click6}>Reduce muscle tension</a>
            <a onClick={click7}>Reduce stress</a>
            <a onClick={click8}>Improve Positive emotion</a>
            <a onClick={click9}>Improve focus</a>
          </div>
        </div>
        <div className="submit-wrapper">
          <button type='submit' className='submit-button'>
            Submit
          </button>
        </div>
      </form>
      
    </div>
  );
};

export default Center: