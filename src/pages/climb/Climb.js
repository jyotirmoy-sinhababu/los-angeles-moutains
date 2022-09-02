import React from 'react';
import { NavLink } from 'react-router-dom';
import mountainthree from '../../images/mountainthree.jpg';
import Schedule from '../../components/Schedule';
import './climb.css';

const Climb = () => {
  return (
    <div className='climb-main-container'>
      <div className='climb-navbar-container'>
        <div className='climb-navbar-first-half'>
          <div className='climb-number'>
            <p className='the-two'>02</p>
          </div>
          <div className='climb-txt'>
            <p className='the-txt'>CLIMB</p>
            <div className='climb-blank'></div>
          </div>
        </div>

        <div className='climb-lorem-txt'>
          <p className='lorem-txt'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            architecto enim nam, ad odio aperiam quae, unde corrupti velit
            magnam atque temporibus beatae.
          </p>
        </div>
      </div>
      <div className='climb-body'>
        <div className='navlink-cnt'>
          <NavLink className='climb-first-link' to=''>
            MOUNTAIN 1
          </NavLink>
          <NavLink className='climb-second-link' to=''>
            MOUNTAIN 2
          </NavLink>
        </div>
        <div
          style={{ backgroundImage: `url(${mountainthree})` }}
          className='climb-block'
        >
          <Schedule />
        </div>
      </div>
    </div>
  );
};

export default Climb;
