import React, { Component } from 'react';
import './Contacts.css';
import axios from 'axios';

class Contacts extends Component {
  constructor () {
    super();
    this.state = {
      apiKey: '',
    };
  }


  componentDidMount () {
    axios.get('api/googleMap')
      .then(response => {
        this.setState({apiKey: response.data});
      });
  }

  render () {
    return (
      <div className="row">
        <div className="col-sm-12 contacts">
          <h4>Contatti Massoterapia di Eleonora Orler</h4>
        </div>
        <div className="col-lg-6 contacts">
          <p>Per ricevere informazioni o per prenotare un trattamento, ecco i recapiti:</p>
          <ul className="contactsList">
            <li><strong>Telefono: </strong> <a href="tel:+393487465813">3487465813</a></li>
            <li><strong>E-mail: </strong><a href="mailto:info@massoterapiaorler.it">info@massoterapiaorler.it</a></li>
            <li><strong>Sede: </strong>Via Guglielmo Marconi 1/1, 38050 Imer (TN)</li>
          </ul>
        </div>
        <div className="col-lg-6 mapDiv">
          <iframe
            className="map"
            width="400"
            height="300"
            frameBorder="0"
            src={`https://www.google.com/maps/embed/v1/place?key=${this.state.apiKey}&q=Via+G.Marconi,1+Imer`} 
            allowFullScreen
          >
          </iframe> 
        </div>
      </div>
    );
  }
}

export default Contacts;