import React from 'react';
import '../../App.css';
import Navbar from '../Navbar'
import CountrySearch from '../CountrySearch';
import Footer from '../Footer';

function SearchByCountry() {
  return (
    <>
      <Navbar />
      <CountrySearch />
      <Footer />
    </>
  );
}

export default SearchByCountry;
