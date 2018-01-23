import React, { Component } from 'react';

import './Footer.css';
import fbLogo from '../assets/fbLogo.png';

class Footer extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12 footer-box">
          <div className="col-sm-12 footer-content">
            <h5 className="footerTitle">Studio di Massoterapia di Eleonora Orler</h5>
            <p>P.IVA 02432570220</p>
            <p>Via Guglielmo Marconi 1/1, 38050 Imer (TN)</p>
            <p>38050 Imer (TN) - Primiero</p>
            <p><a href="mailto:ele.orler@gmail.com">ele.orler@gmail.com</a></p>
            <p><a href="tel:+393487465813">3487465813</a></p>
          </div>
        </div>
        <div className="col-sm-12 d-lg-none fbLogoFooter">
          <a href="https://www.facebook.com/OrlerEleonoraMassoterapia/" target="_blank"><img className="fbLogo" src={fbLogo} alt={"fbLogo"}></img></a>
        </div>
      </div>
    );
  }
}

export default Footer;