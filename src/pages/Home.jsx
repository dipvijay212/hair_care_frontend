import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, Leaf, Zap, Anchor } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import "../styles/Home.css";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);
        // The featured products originally had IDs: 6, 1, 2, 3
        const ids = [6, 1, 2, 3];
        const filtered = data
          .filter((p) => ids.includes(p.id))
          .sort((a, b) => ids.indexOf(a.id) - ids.indexOf(b.id)); // keep original order
        setFeaturedProducts(filtered);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchProducts();
  }, []);

  const benefits = [
    {
      icon: <Zap size={40} />,
      title: "Reduce Hair Fall",
      desc: "Clinically proven to reduce 87% of breakage and fall-out from the first month.",
    },
    {
      icon: <ArrowRight size={40} />,
      title: "Boost Hair Growth",
      desc: "Stimulates dormant follicles to enter the active growth phase faster.",
    },
    {
      icon: <Anchor size={40} />,
      title: "Strengthen Roots",
      desc: "Deeply nourishes the scalp to anchor hair firmly at the root.",
    },
    {
      icon: <Leaf size={40} />,
      title: "Natural Ingredients",
      desc: "100% herbal extracts including Amla, Rosemary, and Bhringraj.",
    },
  ];

  const testimonials = [
    {
      name: "Rahul S.",
      text: "I was skeptical at first, but after using the Gethair-F solution for 45 days, my hair density improved noticeably!",
      stars: 5,
    },
    {
      name: "Amit D.",
      text: "Best clinically proven solution I’ve tried. The KTGOLD shampoo works perfectly for my scalp and has stopped my hair fall.",
      stars: 5,
    },
    {
      name: "Priya M.",
      text: "The Advanced Growth kit is amazing! Taking the Herbitrace-30 tablets alongside the lotions really worked wonders for my thinning hair.",
      stars: 4,
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/assets/kit.jpg" alt="Premium Hair Care Kit" />
        </div>
        <div className="hero-content container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Stop Hair Fall
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Premium Herbal Hair Growth Solutions for a healthier, fuller mane.
            Join thousands of satisfied customers.
          </motion.p>
          <motion.div
            className="hero-btns"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/shop" className="btn btn-primary">
              Shop Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h2>Why HairCare ?</h2>
            <p>
              Our holistic approach to hair wellness ensures long-lasting
              results.
            </p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div className="benefit-card" key={index}>
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products section-padding bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Hero Products</h2>
            <Link to="/shop" className="view-all">
              See Everything <ArrowRight size={16} />
            </Link>
          </div>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Success Story / Transformation Section */}
      <section className="transformation section-padding bg-dark">
        <div className="container">
          <div className="transformation-grid">
            <div className="transformation-image">
              <img
                src="/assets/man-results-top.png"
                alt="Indian Man Hair Growth Result"
              />
              <div className="trans-badge">45 Day Transformation</div>
            </div>
            <div className="transformation-content">
              <span className="subtitle">Clinical Success</span>
              <h2>
                Visible Regrowth <br />
                in 45 days
              </h2>
              <p>
                Our clinical-grade formula is specifically designed for Indian
                hair patterns. Experience the confidence of a fuller, thicker
                mane with our dermatologically tested regimen.
              </p>
              <ul className="check-list">
                <li>
                  <span>✓</span> Increased hair density
                </li>
                <li>
                  <span>✓</span> Stimulates dormant follicles
                </li>
                <li>
                  <span>✓</span> Strengthening from the root
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Kit Spotlight */}
      <section className="kit-spotlight section-padding">
        <div className="container">
          <div className="spotlight-card">
            <div className="spotlight-content">
              <h2>
                The Complete <br />
                Growth Regimen
              </h2>
              <p>
                Our Advanced Growth Kit combines 4 powerful clinical treatments
                into one simple daily routine.
              </p>
              <div className="kit-items-grid">
                <div className="kit-item">
                  <strong>Gethair-F 10%</strong>
                  <p>Minoxidil & Finasteride Solution</p>
                </div>
                <div className="kit-item">
                  <strong>KTGOLD</strong>
                  <p>Ketoconazole & Zpto Shampoo</p>
                </div>
                <div className="kit-item">
                  <strong>Herbitrace-30</strong>
                  <p>Herbal Vitamins & Minerals</p>
                </div>
                <div className="kit-item">
                  <strong>CLODES-B</strong>
                  <p>Clinical Scalp Lotion</p>
                </div>
                <div className="kit-item full-width">
                  <strong>Advanced Derma Roller</strong>
                  <p>Scalp Stimulation Tool</p>
                </div>
              </div>
              <Link to="/product/6" className="btn btn-primary">
                Get the Complete Kit
              </Link>
            </div>
            <div className="spotlight-image">
              <div className="image-focus-wrapper">
                <img src="/assets/kit.jpg" alt="Authentic Hair Growth Kit" />
                <div className="focus-indicator"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section-padding bg-light">
        <div className="container">
          <h2 className="text-center">Loved by Thousands</h2>
          <div className="testimonials-grid">
            {testimonials.map((t, idx) => (
              <div className="testimonial-card" key={idx}>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < t.stars ? "var(--accent-color)" : "none"}
                      color="var(--accent-color)"
                    />
                  ))}
                </div>
                <p>"{t.text}"</p>
                <h4>- {t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-padding">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Revive Your Hair?</h2>
            <p>
              Join the Bloom movement today and get 21% off your first order
              with code: <strong>HairCare21%</strong>
            </p>
            <Link to="/shop" className="btn btn-primary">
              Claim My Offer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
