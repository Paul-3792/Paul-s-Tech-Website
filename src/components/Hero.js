import React from 'react'
import HeroImage from '../Assets/Hero-img.jpg';

const Hero = () => {
    const sectionStyle = {
    background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${HeroImage}) no-repeat center center/cover`,
    color: '#fff',
    minHeight: '70vh',
    display:'flex',
    alignItems: 'center'
};
  return (
    <div>
      <header style={sectionStyle}>
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Welcome to Paul's Tech</h1>
          <p className="lead mt-3">
            Web Development • Graphic Design • Phone & PC Repairs
          </p>
          <p className="mt-4">We build, design and repair.</p>
          <a href="#services" className="btn btn-primary btn-lg mt-3">
            See What We Offer
          </a>
        </div>
      </header>
    </div>
  );
}

export default Hero;
