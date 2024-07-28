// src/pages/LandingPage.js
import React from "react";
import "./LandingPage.css"; // We'll create this next

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Solving [Your Main Problem] in Real Estate</h1>
          <p>
            Effortlessly manage your properties and tenants with our innovative
            solution.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-image">
          {/* Placeholder for hero image or animation */}
          <div className="placeholder-image">Image Placeholder</div>
        </div>
      </section>

      <section className="benefits">
        <h2>How We Help You</h2>
        <div className="benefit-items">
          <div className="benefit-item">
            <h3>Benefit 1</h3>
            <p>Description of how this benefits the user.</p>
          </div>
          <div className="benefit-item">
            <h3>Benefit 2</h3>
            <p>Description of how this benefits the user.</p>
          </div>
          <div className="benefit-item">
            <h3>Benefit 3</h3>
            <p>Description of how this benefits the user.</p>
          </div>
        </div>
      </section>

      <section className="pricing">
        <h2>Pricing Plans</h2>
        <div className="pricing-plans">
          <div className="pricing-plan">
            <h3>Basic</h3>
            <p className="price">$X/month</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button>Choose Plan</button>
          </div>
          <div className="pricing-plan">
            <h3>Pro</h3>
            <p className="price">$Y/month</p>
            <ul>
              <li>All Basic features</li>
              <li>Feature 4</li>
              <li>Feature 5</li>
            </ul>
            <button>Choose Plan</button>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-items">
          <div className="testimonial-item">
            <p>"This solution has transformed how we manage our properties."</p>
            <p className="testimonial-author">- John Doe, Property Manager</p>
          </div>
          <div className="testimonial-item">
            <p>"Incredibly easy to use and has saved us countless hours."</p>
            <p className="testimonial-author">
              - Jane Smith, Real Estate Investor
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
