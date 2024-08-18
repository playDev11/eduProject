import React from 'react'
import './hero.css'
import darkArrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We ensure better education for a better world</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla sequi deserunt architecto dolorem cupiditate pariatur necessitatibus nostrum dolores tempora neque?</p>
            <button className='btn-primary'>Explore more <img src={darkArrow}  alt="" /></button>
        </div>
    </div>
  )
}

export default Hero