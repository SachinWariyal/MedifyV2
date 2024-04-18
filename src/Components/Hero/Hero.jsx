// import React from 'react'
import img from "../../assets/hero-img.png";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="Hero-section">
        <div className="left-side">
          <p className="first-line">Skip the travel! Find Online</p>
          <br />
          <span className="Medical-text">Medical</span>
          <span className="Centers-text">Centers</span>
          <p className="last-line">
            Connect instantly with a 24x7 specialist or choose to <br /> visit a
            particular doctor
          </p>
          <button className="hero-button">
            Find Ceners
          </button>
        </div>
        <div className="right-side">
          <img src={img} alt="" />
        </div>
      </div>
  )
}

export default Hero