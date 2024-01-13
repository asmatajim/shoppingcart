import React from 'react'
import './Hero.css'
import hand from "../Assests/hand-icon.png";
import arrow from '../Assests/arrow-icons.png'
import hero_image from '../Assests/hero_image.jpg'


const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img style={{height:""}} src={hand} alt="" />
                </div>
                <p>collections</p>
                <p>for womens</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collections</div>
                <img style={{height:"50px"}} src={arrow} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img className="heroimage" src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero