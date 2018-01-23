import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import Header from './components/Header';
import Footer from './components/Footer';
import Calendar from './components/Calendar';
import Profile from './components/Profile';
import Contacts from './components/Contacts';
import Services from './components/Services';
import registerServiceWorker from './registerServiceWorker';

import Promise from 'promise-polyfill';

if (!window['Promise']) {
  window['Promise'] = Promise;
}


ReactDOM.render(
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/chisono" component={Profile} />
        <Route exact path="/servizi" component={Services} />
        <Route exact path="/contatti" component={Contacts} />
        <Route exact path="/prenota" component={Calendar} />
        <Route exact path="/" component={App} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();

