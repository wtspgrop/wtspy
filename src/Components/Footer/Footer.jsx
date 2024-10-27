import React from "react";
import "./Footer.css"; // Ensure this path is correct

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-title">
          <img src="/Whatslogo.png" alt="Logo" className="footer-logo" />
        </div>
        <div className="footer-links">
          <div className="footer-link-column">
            <h4>What we do:</h4>
            <a href="#features">Features</a>
            <a href="#blog">Blog</a>
            <a href="#security">Security</a>
            <a href="#for-business">For Business</a>
          </div>
          <div className="footer-link-column">
            <h4>Who we are:</h4>
            <a href="#about-us">About us</a>
            <a href="#careers">Careers</a>
            <a href="#brand-center">Brand Center</a>
            <a href="#privacy">Privacy</a>
          </div>
          <div className="footer-link-column">
            <h4>Need help?:</h4>
            <a href="#contact-us">Contact Us</a>
            <a href="#help-center">Help Center</a>
            <a href="#download">Download</a>
            <a href="#security-advisories">Security</a>
          </div>
          <div className="footer-link-column">
            <h4>Use WhatsApp:</h4>
            <a href="#android">Android</a>
            <a href="#iphone">iPhone</a>
            <a href="#mac-pc">Mac/PC</a>
            <a href="#whatsapp-web">WhatsApp Web</a>
          </div>
        </div>
        <hr />
        <div className="footer-info">
          <span>&copy; 2024 Your Company Name</span>{" "}
          {/* Change company name if needed */}
        </div>
      </footer>
    </>
  );
}
