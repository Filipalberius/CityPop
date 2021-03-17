import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function AboutUs() {
  return (
    <div style={{backgroundImage: "url(./images/img-1.jpg)" }}>
      <Navbar />
      <h1 className='about-us'>About Us</h1>;
      <Footer />
    </div>
  )
}
