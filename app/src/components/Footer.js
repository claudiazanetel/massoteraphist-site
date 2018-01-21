import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12 footer-box">
          <div className="col-sm-12 footer-content">
            <h5 className="footerTitle">Studio di Massoterapia di Eleonora Orler</h5>
            <p>P.IVA 02432570220</p>
            <p>Via Guglielmo Marconi 1/1, 38050 Imer (TN)</p>
            <p><a href="mailto:ele.orler@gmail.com">ele.orler@gmail.com</a></p>
            <p><a href="tel:+393487465813">3487465813</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;