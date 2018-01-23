import React, { Component } from 'react';
import './App.css';

import header from '../assets/header.jpeg';

class App extends Component {

  render () {
    return (
      <div className="row">
        <div className="col services">
          <div className= "service">
            <div>
              <img className="serviceImage" src={header} alt={"header"}></img>
            </div>
            <div className="serviceText">
              <p>MASSOTERAPIA</p>
            </div>
          </div>
          <div className= "service">
            <div>
              <img className="serviceImage" src={header} alt={"header"}></img>
            </div>
            <div className="serviceText">
              <p>MASSAGGIO SPORTIVO</p>
            </div>
          </div>
          <div className= "service">
            <div>
              <img className="serviceImage" src={header} alt={"header"}></img>
            </div>
            <div className="serviceText">
              <p>TECARTERAPIA</p>
            </div>
          </div>
          <div className= "service secondLineLeft">
            <div>
              <img className="serviceImage" src={header} alt={"header"}></img>
            </div>
            <div className="serviceText">
              <p>BENDAGGIO FUNZIONALE</p>
            </div>
          </div>
          <div className= "service secondLineRight">
            <div>
              <img className="serviceImage" src={header} alt={"header"}></img>
            </div>
            <div className="serviceText">
              <p>KINESIOTEPPING</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
