
import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className='custom-navbar'>
        <div className="navbar-logo">Shopper <span>Show</span></div>
        <ul className='navbar-links'>
          <Link to="">HOME</Link>
          <Link to="about">About</Link>
          <Link to="products">Products</Link>
          <Link to="services">Services</Link>
          <Link to="contact">Contact Us</Link>
        </ul>
        <div className="navbar-search">
          <input type="text" placeholder='Search...' />
          <button type='Submit'>Search</button>
        </div>
      </nav>
    </>
  );
}
