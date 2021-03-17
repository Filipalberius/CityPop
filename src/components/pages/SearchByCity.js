import React from 'react';
import '../../App.css';
import Navbar from '../Navbar'
import CitySearch from '../CitySearch';
import Footer from '../Footer';

function SearchByCity() {
  return (
    <>
      <Navbar />
      <CitySearch />
      <Footer />
    </>
  );
}

export default SearchByCity;
