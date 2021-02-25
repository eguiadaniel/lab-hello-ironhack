import React, { Component } from 'react';
import logo from './logo.svg';
import Icon from './Icon';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <img
          src="./images/ironhack-logo.svg"
          className="navbar-logo"
          alt="navbar-logo"
        />
        <img src="./images/menu-top.svg" className="menu-top" alt="menu-top" />
      </div>
    );
  }
}

export default Navbar;
