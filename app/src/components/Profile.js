import React, { Component } from 'react';
import './Profile.css';

import profile from '../assets/profile.jpg';

class Profile extends Component {

  render () {
    return (
      <div className="row">
        <div className="col-sm-12">
          <h4>ELEONORA ORLER</h4>
          <img className="profileImage" src={profile} alt={"profile"}></img>
          <p>massoterapista</p>
          <h5>Studi</h5>
          <ul>
            <li>Diploma di Massaggiatore e Capo Bagnino degli stabilimenti idroterapici presso Centro Studi Superiori Synapsy a giugno 2016</li>
            <li>Corso di specializzazione in “Sistema propriocettivo nel trattamento del paziente ortopedico”</li>
            <li>Corso di specializzazione in “Valutazione terapia manuale ed esercizio terapeutico nelle patologie da overuse del piede e del ginocchio dell’atleta”</li>
            <li>Corso di specializzazione in “Le tendinopatie – aspetti fisiopatologici ed approccio riabilitativo e strumentale integrato”</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;