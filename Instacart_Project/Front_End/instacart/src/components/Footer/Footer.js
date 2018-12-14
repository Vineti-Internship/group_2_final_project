import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
     
    <footer>
    <div className='left-block'>
      <div className='location'>
        <h2>Our Location</h2>
        <h3>Yerevan, Armenia</h3>
        <h3>Hanrapetutyan str</h3>
      </div>
      <div className='number'>
        <h2>Contact Phone</h2>
        <h3>+374 (11) 57-50-70</h3>
      </div>
      <div className='email'>
        <h2>Contact Email</h2>
        <h3>Instacart@gmail.com</h3>
      </div>
    </div>

    <div className='right-block'>
      <div className='about'>
        <h1>About Us</h1>
        <h3>Instacart is a grocery delivery startup. It has number of local stores that its users can shop from.</h3>
      </div>
      <h1>We are glad to see you here today <span style={{color: 'red'}}><i class="far fa-heart"></i></span></h1>
    </div>
    </footer>
  
    )
}

export default Footer;