import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-5 text-center">
      <div className="container">
        <h2 className="fw-bold mb-4">Contact Us</h2>
        <p className="mb-4">
          Got a project or repair request? We'd love to hear from you.
        </p>
        <form
          action="https://formspree.io/f/xkgbwwwp"
          method="POST"
          className="row g-3 justify-content-center"
        >
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="col-md-5">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="col-md-10">
            <textarea
              className="form-control"
              rows="4"
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="col-md-10">
            <button type="submit" className="btn btn-primary btn-lg w-100">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact
