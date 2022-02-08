import React from 'react';
import './HeroSection.css'

function HeroSection() {
  return (
   <div className='hero-container'>
      <video className="cover-video" src='/videos/intro.mp4' autoPlay loop muted/>
      <h1>Welcome</h1>
      <p>Welcome to my website where I talk about</p>
      <p> the shows I've watched and rate them.</p>
      <h3 className='Three'>Hope you enjoy.</h3>
  </div>
  )
  
}
export default HeroSection