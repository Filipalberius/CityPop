import React from 'react';
import '../../App.css';
import Navbar from '../Navbar'
import Footer from '../Footer';

function SignUp() {
  return (
    <>
      <div style={{backgroundImage: "url(./images/img-2.jpg)"}}>
        <Navbar />
        <h1 className='sign-up'>SIGN UP</h1>
        <p> Please note that you, by using this site, agree to seel your soul to the devil. </p>
        <Footer />
      </div>
    </>
  );
}

export default SignUp;
