import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logoEle.png';

class Header extends Component {
  render() {
    return (
      <div className="row nav">
        <div className="col-sm-12">
          <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top">
            <Link className="navbar-brand" to="/">
              <img className="logo" src={logo} alt={"logo"}></img>
            </Link>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/servizi">SERVIZI</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/chisono">CHI SONO</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contatti">CONTATTI</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/prenota">PRENOTA</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;