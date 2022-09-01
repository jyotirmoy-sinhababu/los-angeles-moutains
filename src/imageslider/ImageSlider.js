import React from 'react';
import pexelsone from '../images/pexelsone.jpg';
import pexelstwo from '../images/pexelstwo.jpg';
import pexelsthree from '../images/pexelsthree.jpg';
import pexelsfour from '../images/pexelsfour.jpg';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './imageslider.css';

const ImageSlider = () => {
  return (
    <Carousel className='img-list'>
      <Carousel.Item>
        <img className='carousel-images' src={pexelsone} />
      </Carousel.Item>
      <Carousel.Item>
        <img className='carousel-images' src={pexelstwo} />
      </Carousel.Item>
      <Carousel.Item>
        <img className='carousel-images' src={pexelsthree} />
      </Carousel.Item>
      <Carousel.Item>
        <img className='carousel-images' src={pexelsfour} />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageSlider;
