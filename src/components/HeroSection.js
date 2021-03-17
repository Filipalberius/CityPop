import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='./videos/video-2.mp4' autoPlay loop muted />
      <h1>CITY POPULATION</h1>
      <p>Find population data by City or Country</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SEARCH BY CITY
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          SEARCH BY COUNTRY
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
