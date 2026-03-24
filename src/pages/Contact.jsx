import React from "react";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page container section-padding">
      <div className="contact-header">
        <h1>Connect With Us</h1>
        <p>We're here to support your hair growth journey.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <div className="contact-methods">
            <div className="method">
              <Mail className="method-icon" />
              <div>
                <h4>Email</h4>
                <p>hello@rootandbloom.com</p>
              </div>
            </div>
            <div className="method">
              <Phone className="method-icon" />
              <div>
                <h4>Phone</h4>
                <p>9662675683, 8200646929</p>
              </div>
            </div>
            <div className="method">
              <MapPin className="method-icon" />
              <div>
                <h4>Studio</h4>
                <p>
                  123 Botanical Ave, <br />
                  Santa Monica, CA 90401
                </p>
              </div>
            </div>
          </div>
          <div className="social-presence">
            <h4>Follow Our Progress</h4>
            <div className="social-icons">
              <Instagram />
              <Facebook />
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <select required>
              <option value="">Subject</option>
              <option value="order">Order Inquiry</option>
              <option value="product">Product Question</option>
              <option value="distributor">Distributor Request</option>
            </select>
            <textarea placeholder="Your Message" rows="6" required></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
