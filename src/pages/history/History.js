import React from 'react';
import Logo from '../../components/logo/Logo';
import { NavLink } from 'react-router-dom';
import mountainone from '../../images/mountainone.jpg';
import ImageSlider from '../../imageslider/ImageSlider';
import './history.css';

const History = () => {
  return (
    <div className='history-container'>
      <div className='history-navbar-container'>
        <div className='navbar-head'>
          <Logo />
          <div className='heading-container'>
            <p className='second-heading-one'>LOSANGELES </p>
            <p className='second-heading'>MOUNTAINS</p>
          </div>
        </div>
        <div className='history-navigation'>
          <NavLink className='links' to='history'>
            0.1 HISTORY
          </NavLink>
          <NavLink className='links' to=''>
            0.2 CLIMB
          </NavLink>
        </div>
      </div>
      <div
        className='history-body'
        style={{ backgroundImage: `url(${mountainone})` }}
      >
        <div className='history-body-head'>
          <div className='number-container'>
            <p className='the-number'>01</p>
          </div>
          <div className='history-txt'>
            <p className='txt'>HISTORY</p>
            <div className='blank'></div>
          </div>
        </div>
        <div className='lorem-block'>
          <p className='lorem-txt'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            aspernatur, dolores, ab dolorum, est voluptates alias sapiente
            voluptas veritatis facere similique neque id explicabo fugit dolorem
            pariatur commodi ducimus eveniet?
          </p>
        </div>
        <div className='history-body-end-block'>
          <ImageSlider />
        </div>
      </div>
    </div>
  );
};

export default History;
