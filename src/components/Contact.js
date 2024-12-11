//Name: Smitkumar Macwan Student Id: 8909653 Email: smacwan9653@conestogac.on.ca
//Web Trends Project ( Made Contact Us page)

import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { Nav } from "react-bootstrap";
import "./Contact.css"; // Import external CSS

const Contact = () => {
  return (
    <div className="container my-5 contact-page">
      <div className="text-center mb-5">
        <h1 className="display-4">Contact Us</h1>
        <p className="lead">
          Have a question, suggestion, or feedback? We'd love to hear from you!
        </p>
      </div>

      {/* Contact Information Section */}
      <section className="mb-5">
        <h2>Get in Touch</h2>
        <p>
          Reach out to us through the following contact details or fill out the
          form below to send us a message.
        </p>
        <ul>
          <li><strong>Email:</strong> support@movieinfo.com</li>
          <li><strong>Phone:</strong> +1 (123) 456-7890</li>
          <li><strong>Address:</strong> 123 Movie Lane, Film City, CA 90210</li>
        </ul>
      </section>

      {/* Contact Form Section */}
      <section className="mb-5 bg-light p-4 rounded">
        <h2 className="text-center mb-4">Send Us a Message</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows="5"
              placeholder="Write your message here"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary mt-3 w-100">
            Submit
          </button>
        </form>
      </section>

      {/* Call to Action Section */}
      <section className="text-center p-4 bg-primary text-white rounded">
        <h2>Stay Connected</h2>
        <p className="mb-4">
          Follow us on social media to stay updated with the latest news and updates.
        </p>
        <Nav className="d-flex justify-content-center">
          <Nav.Link as={Link} to="/">
            <button className="btn btn-light">Home</button>
          </Nav.Link>
        </Nav>
      </section>
    </div>
  );
};

export default Contact;
