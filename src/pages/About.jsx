import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-page container section-padding">
      <div className="about-hero">
        <h1 className="premium-font">
          Roots in Nature, <br />
          Backed by Science
        </h1>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            HairCare Kit was born out of a simple realization:
            the hair care industry was filled with harsh chemicals that promised
            quick fixes but often caused long-term damage.
          </p>
          <p>
            We spent 10 years collaborating with leading trichologists and
            botanical experts to create a range of products that work with your
            body's natural rhythms. Our mission is to empower individuals to
            reclaim their confidence through healthier, fuller hair.
          </p>
        </div>
      </div>

      <div className="values-section">
        <div className="value-item">
          <h3>Sustainably Sourced</h3>
          <p>
            Every ingredient is picked with care for the planet and your scalp.
          </p>
        </div>
        <div className="value-item">
          <h3>0% Harmful Additives</h3>
          <p>No parabens, sulfates, or synthetic fragrances. Ever.</p>
        </div>
        <div className="value-item">
          <h3>Inclusive Care</h3>
          <p>Formulated for all hair types, textures, and ethnicities.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
