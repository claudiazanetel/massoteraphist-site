import React, { Component } from 'react';
import './Profile.css';

import profile from '../assets/profile.jpg';

class Profile extends Component {

  render () {
    return (
      <div className="row">
        <div className="col-sm-12 profile">
          <div className="col-sm-12 profileTitle">
            <h4>ELEONORA ORLER</h4>
            <p>Massoterapista</p>
            <img className="profileImage" src={profile} alt={"profile"}></img>
          </div>
          <div className="col-sm-12">
            <h5>Studi</h5>
            <ul>
              <li><strong>Giugno 2016:</strong> Diploma di Massaggiatore e Capo Bagnino degli stabilimenti idroterapici presso Centro Studi Superiori Synapsy</li>
              <li><strong>xxx 2016:</strong> Corso di specializzazione in “Sistema propriocettivo nel trattamento del paziente ortopedico”</li>
              <li><strong>xxx 2016:</strong> Corso di specializzazione in “Valutazione terapia manuale ed esercizio terapeutico nelle patologie da overuse del piede e del ginocchio dell’atleta”</li>
              <li><strong>xxx 2016:</strong> Corso di specializzazione in “Le tendinopatie – aspetti fisiopatologici ed approccio riabilitativo e strumentale integrato”</li>
            </ul>
            <h5>Esperienze Professionali</h5>
            <ul>
              <li>Massaggiatrice della Squadra Nazionale Junior di Sci Nordico per la F.I.S.I.</li>
              <li>Collaboratore presso studio di fisioterapia</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;