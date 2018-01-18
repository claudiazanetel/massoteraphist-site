import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './componets/App';
import Header from './componets/Header';
import Footer from './componets/Footer';
import Calendar from './componets/Calendar';
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
        <Route exact path="/prenota" component={Calendar} />
        <Route exact path="/" component={App} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();

