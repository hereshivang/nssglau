import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../CSS/About.css";

const About = () => {
  return (
    <div className="about-us">
      <header className="header">
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Event">Events</Link>
            </li>
            <li>
              <Link to="/Gallery">Gallery</Link>
            </li>
          </ul>
          <div className="logo">
            <img src="../assets/nsslogo.png" alt="NSS" />
          </div>
          <div className="auth-buttons">
            <button className="sign-up">Join Us</button>
            <button className="log-in">Log in</button>
          </div>
        </nav>
      </header>

      <section className="about-section">
        <h1>About Us</h1>
        <p>A Social Service Society at GLA Univerity</p>
      </section>

      <section className="info-section">
        <h2>Not Me, But You</h2>
        <div className="info-content">
          <div className="text-content">
            <button className="tab-button">Mission</button>
            <button className="tab-button">Vision</button>
            <p>XYZ </p>
          </div>
          <div className="image-content">
            <img src="path_to_image" alt="Profile" />
          </div>
        </div>
      </section>

     {/* Video Section */}
     

      {/* FAqs Section */}

      <footer className="footer">
        <h2>Be a Social Saviour</h2>
        <p>Not Me, But You!</p>
        <button className="get-started">Join US</button>
        <div>
          <img src="../assets/nsslogo.png" alt="NSS" />
        </div>
        <div className="social-links">
          <a href="https://facebook.com">
            <FaFacebook />
          </a>
          <a href="https://twitter.com">
            <FaTwitter />
          </a>
          <a href="https://instagram.com">
            <FaInstagram />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default About;
