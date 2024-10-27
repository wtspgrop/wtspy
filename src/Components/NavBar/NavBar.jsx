import React, { Component } from "react";
import "./NavBar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <div className="empty-menu">
          <div className="hamburger-menu">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        <img src="/Whatslogo.png" alt="WhatsApp Logo" className="navbar-logo" />
        <div className="download-icon">
          <div className="circle">
            <span className="down-arrow">↓</span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
