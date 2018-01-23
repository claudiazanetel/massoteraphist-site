import React, { Component } from 'react';
import './Services.css';

import header from '../assets/header.jpeg';

class Services extends Component {

  render () {
    return (
      <div className="row">
        <div className="col-sm-12 services">
          <div className= "row service">
            <div className="col-sm-3 serviceImage">
              <img src={header} alt={"header"}></img>
            </div>
            <div className="col-sm-9 serviceText">
              <h6>MASSOTERAPIA</h6>
              <p>Tecnica riabilitativa e preventiva fondata sul massaggio. <br></br>Viene utilizzata per ridurre la
                fatica, aumentare la capacità di recupero degli atleti e per rilassare i muscoli. Produce un
                miglioramento della circolazione sanguigna, aumenta l’elasticità di pelle e muscoli, porta ad un
                effetto rilassante alleviando il dolore e sciogliendo le contratture muscolari.</p>
            </div>
          </div>
          <div className= "row service">
            <div className="col-sm-3 serviceImage">
              <img src={header} alt={"header"}></img>
            </div>
            <div className="col-sm-9 serviceText">
              <h6>MASSAGGIO SPORTIVO</h6>
              <p>Tipo particolare di massaggio con numerose finalità per gli atleti:</p>
              <ul className="list">
                <li>Riduzione delle tensioni muscolari</li>
                <li>Stimolazione della microcircolazione locale</li>
                <li>Effetto drenante abbinato ad accelerata rimozione dell’acido lattico e delle scorie
                    metaboliche presenti per l’attività svolta</li>
                <li>Decongestionamento e rilassamento dei tessuti, abbinato ad accelerata guarigione dalle
                    contratture muscolari</li>
                <li>Prevenzione degli infortuni</li>
                <li>Preparazione muscolare all’attività fisica</li>
              </ul>
            </div>
          </div>
          <div className= "row service">
            <div className="col-sm-3 serviceImage">
              <img  src={header} alt={"header"}></img>
            </div>
            <div className="col-sm-9 serviceText">
              <h6>TECARTERAPIA</h6>
              <p>Terapia che porta risultati molto rapidi in diversi trattamenti:</p>
              <ul className="list">
                <li>Traumi sportivi</li>
                <li>Strappi</li>
                <li>Tendiniti</li>
                <li>Dolori muscolari e articolari</li>
                <li>Recupero di sovraccarichi sportivi</li>
                <li>Contratture muscolari</li>
              </ul>
            </div>
          </div>
          <div className= "row service">
            <div className="col-sm-3 serviceImage">
              <img src={header} alt={"header"}></img>
            </div>
            <div className="col-sm-9 serviceText">
              <h6>BENDAGGIO FUNZIONALE</h6>
              <p>Tecnica di immobilizzazione parziale per ridurre i tempi di guarigione.</p>
            </div>
          </div>
          <div className= "row service">
            <div className="col-sm-3 serviceImage">
              <img src={header} alt={"header"}></img>
            </div>
            <div className="col-sm-9 serviceText">
              <h6>KINESIOTEPPING</h6>
              <p>bendaggio elastico usato per alleviare il dolore da contratture e tensioni muscolari,
                tendiniti, ematomi, per il drenaggio linfatico, sostenere articolazioni sofferenti.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;