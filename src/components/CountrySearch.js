import React from 'react';
import '../App.css';
import { Button } from './Button';
import './CountrySearch.css';

function HeroSection() {
  return (
    <div className='hero-container'
      style={{backgroundImage: "url(./images/img-1.jpg)"}}>
      <h1>SEARCH BY COUNTRY</h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SEARCH
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
