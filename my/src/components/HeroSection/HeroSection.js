import React from 'react';
import './HeroSection.css'

function HeroSection() {
  return (
   <div className='hero-container'>
      <video className="cover-video" src='/videos/intro.mp4' autoPlay loop muted/>
      <h1>Welcome</h1>
      <p>Welcome to my website where I talk about the shows I've watched and rate them. Hope you enjoy.</p>
  </div>
  )
  
}
export default HeroSection