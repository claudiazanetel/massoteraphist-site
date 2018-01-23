import React, { Component } from 'react';
import './App.css';

import header from '../assets/header.jpeg';

class App extends Component {

  render () {
    return (
      <div className="row">
        <div className="col servicesHomepage">
          <h4 className="titleHomepage">I NOSTRI TRATTAMENTI</h4>
          <div className= "serviceHomepage">
            <div>
              <img className="serviceImageHomepage" src={header} alt={"header"}></img>
            </div>
            <div className="serviceTextHomepage">
              <p>MASSOTERAPIA</p>
            </div>
          </div>
          <div className= "serviceHomepage">
            <div>
              <img className="serviceImageHomepage" src={header} alt={"header"}></img>
            </div>
            <div className="serviceTextHomepage">
              <p>MASSAGGIO SPORTIVO</p>
            </div>
          </div>
          <div className= "serviceHomepage">
            <div>
              <img className="serviceImageHomepage" src={header} alt={"header"}></img>
            </div>
            <div className="serviceTextHomepage">
              <p>TECARTERAPIA</p>
            </div>
          </div>
          <div className= "serviceHomepage secondLineLeft">
            <div>
              <img className="serviceImageHomepage" src={header} alt={"header"}></img>
            </div>
            <div className="serviceTextHomepage">
              <p>BENDAGGIO FUNZIONALE</p>
            </div>
          </div>
          <div className= "serviceHomepage secondLineRight">
            <div>
              <img className="serviceImageHomepage" src={header} alt={"header"}></img>
            </div>
            <div className="serviceTextHomepage">
              <p>KINESIOTEPPING</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
