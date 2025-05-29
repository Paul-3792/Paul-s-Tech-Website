import React from "react";
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-5">
      <div className="container text-center">
        <p className="mb-3">
          &copy; {new Date().getFullYear()} <strong>Paul's Tech</strong>. All
          rights reserved.
        </p>

        <div className="mb-3 d-flex justify-content-center gap-4">
          <a
            href="https://www.instagram.com/paulstech_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="text-light fs-5"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100068445133502"
            className="text-light fs-5"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.tiktok.com/@paulstech_?is_from_webapp=1&sender_device=pc"
            className="text-light fs-5"
          >
            <i className="fab fa-tiktok"></i>
          </a>
        </div>

        <p className="text-muted small mb-3">
          Web Development • Graphic Design • Phone & PC Repairs
        </p>

        <button onClick={scrollToTop} className="btn btn-outline-light btn-sm">
          <i className="fas fa-chevron-up me-2"></i>Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
