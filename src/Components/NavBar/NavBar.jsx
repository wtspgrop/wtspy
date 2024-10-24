import React, { Component } from "react";
import "./NavBar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <i>
            <img src={`${process.env.PUBLIC_URL}/wp.png`} alt="logo" />
          </i>
        </h1>
        <h1 className="navbar-title">مجموعة الواتساب</h1>
      </nav>
    );
  }
}

export default Navbar;
