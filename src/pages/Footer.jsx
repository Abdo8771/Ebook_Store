import React from 'react';
import "../style/Footer.css"

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column footer-brand">
          <h2 className="footer-title">Read&amp;Relax</h2>
          <div className="social-icons">
  <a href="https://facebook.com" target="_blank"  className="icon face">
    <i className="fab fa-facebook-f"></i>
  </a>
  <a href="https://youtube.com" target="_blank"  className="icon yout">
    <i className="fab fa-youtube"></i>
  </a>
  <a href="https://twitter.com" target="_blank"  className="icon twit">
    <i className="fab fa-twitter"></i>
  </a>
  <a href="https://linkedin.com" target="_blank"  className="icon linked">
    <i className="fab fa-linkedin-in"></i>
  </a>
</div>

        </div>
        <div className="footer-column">
          <h3 className="footer-title">About us</h3>
          <ul className="footer-list">
            <li>News</li>
            <li>Interesting</li>
            <li>Favorits</li>
            <li>Partnership</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Discover</h3>
          <ul className="footer-list">
            <li>Home</li>
            <li>Books</li>
            <li>Authors</li>
            <li>Subjects</li>
            <li>Advanced Search</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">My Account</h3>
          <ul className="footer-list">
            <li>Sign in</li>
            <li>View Cart</li>
            <li>My Wishlist</li>
            <li>Track my order</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Help</h3>
          <ul className="footer-list">
            <li>Help Center</li>
            <li>Report a Problem</li>
            <li>Suggestions Edits</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
