import React from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-section brand-info">
            <h3 className="brand-logo">Hair Wellness</h3>
            <p>
              High-performance hair care that harnesses the power of botanical
              science to restore your crown.
            </p>

          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <nav className="footer-nav">
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          {/* Customer Support */}
          <div className="footer-section">
            <h4>Customer Support</h4>
            <nav className="footer-nav">
              <Link to="/shipping-policy">Shipping Policy</Link>
              <Link to="/refund-policy">Refund Policy</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="footer-section contact-info">
            <h4>Contact Us</h4>
            <ul className="contact-list">
              <li>
                <Phone size={18} />
                <span>9662675683, 8200646929</span>
              </li>

              <li>
                <MapPin size={18} />
                <span>Surat, Gujarat, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Hair Care. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
