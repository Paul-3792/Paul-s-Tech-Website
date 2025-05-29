import React from 'react'
import './About.css';
import Footer2 from '../components/Footer2';
const About = () => {
  return (
    <section className="text-center abt-section">
      <div className="container">
        <h2 className='text-white'> About Paul's Tech</h2>
        <p className="mt-3 text-white">
          Paul's Tech was established in the year 2024 by the founder and CEO,
          Opara Paul Chibuikem. At Paul's Tech, we create stunning
          web-applications for small and even large businesses and business
          owners, we design flyers and posters and also fix/repair devices. Here
          at paul's tech, we don't just create websites, design flyers and
          posters and repair devices, but we also teach and engage
          clients/individuals who are willing to learn any of these services we
          offer. And we do these things at a very affordable price range that
          you will be comfortable with.
        </p>
      </div>
    {/* <Footer2 /> */}
    </section>

  );
}

export default About;
