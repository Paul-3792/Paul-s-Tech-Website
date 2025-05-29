import React from 'react'
import Footer from '../components/Footer';

const testimonials = [
  {
    quote:
      "Paul's Tech built my website and I absolutely love it! Very professional.",
    name: "Tobi Adegboye",
  },
  {
    quote: "My phone was fixed the same day. Quick and affordable.",
    name: "Anthonia Opara",
  },
  {
    quote:
      "Paul's Tech did a very good job designing a logo for my business. It's very good and beautiful.",
    name: "Vivian U.",
  },
];
const Testimonials = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">What Our Clients Say</h2>

        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <p className="card-text fst-italic text-muted">
                    "{testimonial.quote}"
                  </p>
                  <h6 className="mt-3 text-end fw-bold">
                    – {testimonial.name}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Testimonials;
