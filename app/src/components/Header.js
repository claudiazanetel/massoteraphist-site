import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

import logo from '../assets/logoEle.png';
import fbLogo from '../assets/fbLogo.png';
import header from '../assets/header.jpeg';

class Header extends Component {
  render() {
    return (
      <div className="row nav">
        <div className="col-sm-12 menu">
          <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top">
            <NavLink className="navbar-brand" to="/">
              <img className="logo" src={logo} alt={"logo"}></img>
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav" data-toggle="collapse" data-target=".navbar-collapse">
                <NavLink className="nav-item nav-link" to="/servizi">SERVIZI</NavLink>
                <NavLink className="nav-item nav-link" to="/chisono">CHI SONO</NavLink>
                <NavLink className="nav-item nav-link" to="/contatti">CONTATTI</NavLink>
                <NavLink className="nav-item nav-link" to="/prenota">DISPONIBILITà</NavLink>
              </ul>
            </div>
            <div className="d-none d-lg-block fbLogoDiv">
              <a href="https://www.facebook.com/OrlerEleonoraMassoterapia/" target="_blank"><img className="fbLogo" src={fbLogo} alt={"fbLogo"}></img></a>
            </div>
          </nav>
        </div>
        <div className="col-sm-12 headerImageDiv">
          <img className="headerImage" src={header} alt={"header"}></img>
        </div>
      </div>
    );
  }
}

export default Header;