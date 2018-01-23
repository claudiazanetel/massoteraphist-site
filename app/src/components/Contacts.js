import React, { Component } from 'react';
import './Contacts.css';

class Contacts extends Component {

  render () {
    return (
      <div className="row">
        <div className="col-sm-12 contacts">
          <h4>Contatti Massoterapia di Eleonora Orler</h4>
          <p>Per ricevere informazioni o per prenotare un trattamento, ecco i recapiti:</p>
          <ul className="contactsList">
            <li><strong>Telefono: </strong> <a href="tel:+393487465813">3487465813</a></li>
            <li><strong>E-mail: </strong><a href="mailto:info@massoterapiaorler.it">info@massoterapiaorler.it</a></li>
            <li><strong>Sede: </strong>Via Guglielmo Marconi 1/1, 38050 Imer (TN)</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Contacts;