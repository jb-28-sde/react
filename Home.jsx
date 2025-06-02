import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import './Home.css'

export default function Home() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Outlet />

      {location.pathname === '/' && ( 
        <div className="home-hero">
          <video className='background-video' autoPlay loop muted playsInline src="https://videos.pexels.com/video-files/5889062/5889062-uhd_2560_1440_25fps.mp4" type="video/mp4">
          </video>

          <div className="home-content">
            <h1 className='home-title'>
              Welcome to ShopperShow
            </h1>
            <p className='home-subtitle'> Where Shopping Meets The Happiness</p>
            <p className='home-text'> Discover a Shopping Platform of Quality Products at Your Choices. ShopperShow Combines Style, Speed, and All Products in one Place.
            </p>
            <button className='shop-btn'>Shop Now</button>
          </div>
        </div>
      )}
      
      <Footer />
    </>
  )
}
