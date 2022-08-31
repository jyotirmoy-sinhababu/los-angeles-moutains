import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../components/logo/Logo';
import mountaintwo from '../../images/mountaintwo.jpg';
import './home.css';

const Home = () => {
  return (
    <div
      className='main-container'
      style={{ backgroundImage: `url(${mountaintwo})` }}
    >
      <div className='nav-container'>
        <div className='logo-container'>
          <Logo />
        </div>
        <div className='navlink-container'>
          <NavLink className='links' to='/history'>
            0.1 HISTORY
          </NavLink>
          <NavLink className='links' to='/climb'>
            0.2 CLIMB
          </NavLink>
        </div>
      </div>
      <div className='second-container'>
        <p className='heading'>LOSANGELES MOUNTAIN</p>
      </div>
    </div>
  );
};

export default Home;
