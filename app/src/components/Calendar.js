import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import moment from 'moment';
import 'moment/locale/it';

import './Calendar.css';

import BigCalendar from 'react-big-calendar';
// a localizer for BigCalendar
BigCalendar.momentLocalizer(moment);


class App extends Component {
  constructor () {
    super();
    this.state = {
      events: [],
      isLoading: true
    };
  }


  componentDidMount () {
    axios.get('api/calendar')
      .then(response => {
        console.log(response.data);
        this.setState({ events: response.data }, () => this.stringToDate());
      });
  }

  stringToDate () {
    this.state.events.map(event => {
      event.start = moment(event.start).toDate();
      event.end = moment(event.end).toDate();
    });
    this.setState({isLoading: false});
  }

  render () {
    return (
      <div className="row calendar">
        {
          this.state.isLoading ? 
            <p> Loading </p> : 
            <div className="col-sm-12">
              <p className="textAvailability">Controlla la disponibilità per un appuntamento e contattami <br></br> al numero <a href="tel:+393487465813">3487465813</a> o mandami un e-mail <a href="mailto:info@massoterapiaorler.it">info@massoterapiaorler.it</a></p>
              <BigCalendar
                style={{height: '700px', width: '100%'}}
                events={this.state.events}
                defaultView="week"
                views={['week', 'day']}
                min={moment('2017-01-01 08:00:00').toDate()}
                max={moment('2017-01-01 20:00:00').toDate()}
                formats={{timeGutterFormat: 'HH:mm', dayFormat:'ddd D'}}
              />
            </div>
        }
      </div>
    );
  }
}

export default App;

