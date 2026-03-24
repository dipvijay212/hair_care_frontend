import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X, Search, User } from "lucide-react";
import { useCart } from "../context/CartContext";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);


  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${location.pathname === "/" && !scrolled ? "transparent" : ""}`}
    >
      <div className="container nav-content">
        <div className="nav-left">
          <Link to="/" className="brand-logo">

          </Link>
        </div>

        <div className="nav-center">
          <div className={`nav-links ${isOpen ? "open" : ""}`}>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
            <Link
              to="/shop"
              className={location.pathname === "/shop" ? "active" : ""}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="nav-right">
          <Link to="/cart" className="nav-icon cart-icon">
            <ShoppingBag size={22} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
