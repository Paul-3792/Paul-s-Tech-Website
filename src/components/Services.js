import React from "react";
import webDevImg from "../Assets/Webdev.jpeg"; // replace with your actual image
import graphicDesignImg from "../Assets/Graphics.jpeg"; // replace with your actual image
import repairImg from "../Assets/Phone repair.jpeg"; // replace with your actual image

const Services = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        {/* Web Development */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src={webDevImg}
              className="card-img-top"
              alt="Web Development"
            />
            <div className="card-body">
              <h5 className="card-title">Web Development</h5>
              <p className="card-text">
                We build stunning and responsive websites for businesses and
                individuals.
              </p>
            </div>
          </div>
        </div>

        {/* Graphic Design */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src={graphicDesignImg}
              className="card-img-top"
              alt="Graphic Design"
            />
            <div className="card-body">
              <h5 className="card-title">Graphic Design</h5>
              <p className="card-text">
                We design logos, flyers, posters, and brand assets tailored to
                your needs.
              </p>
            </div>
          </div>
        </div>

        {/* Phone & PC Repairs */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src={repairImg}
              className="card-img-top"
              alt="Phone & PC Repairs"
            />
            <div className="card-body">
              <h5 className="card-title">Phone & PC Repairs</h5>
              <p className="card-text">
                We diagnose and fix phones, laptops, and desktop PCs — fast and
                affordably.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
