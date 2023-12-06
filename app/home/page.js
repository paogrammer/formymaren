// pages/index.js

import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div>
      {/* <h1>Home Page</h1> */}
      <div className='home-text'>
        <p className='mb-5'>Hi Maren,</p>
        <p>In this page, I made you a tulip. It's not the best-looking nor the most realistic flower you'll ever see, but I programmed it myself. In this world, there's only one of it. Just like you--one of a kind.</p>
      </div>
      
      <div className='tulip'>
        <div className='petals'>
          <div className='petal1'></div>
          <div className='petal2'></div>
          <div className='petal3'></div>
        </div>
        <div className='stem'></div>
        <div className='leaves'>
          <div className='leaf1'></div>
          <div className='leaf2'></div>
        </div>

      </div>
    </div>
  );
};

export default Home;
