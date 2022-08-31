import React from 'react';
import logo from '../../images/logo.png';
import './logo.css';

const Logo = () => {
  return (
    <div className='image-container'>
      <img className='img' src={logo} alt='mountain-logo' />
    </div>
  );
};

export default Logo;
