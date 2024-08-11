import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegCommentDots, FaRegEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import '../CSS/Contact.css'; // Import your CSS styles
import "../Utils/Navbar.jsx"

const Contact = () => {
  return (
    <div className="contact-page">
      <Navbar/>

      <main className="main-content">
        <h1>Contact Our Support Team</h1>
        <p>We’re here to assist you. Let us know how we can help.</p>
        <div className="contact-options">
          <div className="contact-option">
            <FaRegCommentDots className="contact-icon" />
            <h2>Chat to Sales</h2>
            <p>Speak to our sales team.</p>
            <a href="mailto:sales@nss.com">sales@nss.com</a>
          </div>
          <div className="contact-option">
            <FaRegEnvelope className="contact-icon" />
            <h2>Chat to Support</h2>
            <p>We’re here to help.</p>
            <a href="mailto:support@nss.com">support@nss.com</a>
          </div>
          <div className="contact-option">
            <FaMapMarkerAlt className="contact-icon" />
            <h2>Visit Us</h2>
            <p>Visit our office.</p>
            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>
          </div>
          <div className="contact-option">
            <FaPhoneAlt className="contact-icon" />
            <h2>Call Us</h2>
            <p>Mon-Fri from 8am to 5pm.</p>
            <a href="tel:+15550000000">+1 (555) 000-0000</a>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="cta">
          <h2>Ready to level up your business?</h2>
          <p>Start your 30-day free trial. Cancel anytime.</p>
          <button className="view-demo-btn">View Demo</button>
          <button className="get-started-btn">Get Started</button>
        </div>
        <div className="footer-info">
          <p>NSS - Design amazing digital experiences that create more happiness in the world.</p>
          <div className="footer-links">
            <Link to="/">Overview</Link>
            <Link to="/features">Features</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/help">Help</Link>
            <Link to="/privacy">Privacy</Link>
          </div>
        </div>
        <div className="footer-social">
          <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
          <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
          <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
          <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
          <a href="https://dribbble.com"><i className="fab fa-dribbble"></i></a>
        </div>
        <div className="app-links">
          <a href="https://apps.apple.com"><img src="/app-store-badge.png" alt="App Store" /></a>
          <a href="https://play.google.com"><img src="/google-play-badge.png" alt="Google Play" /></a>
        </div>
        <p>&copy; 2024 NSS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
