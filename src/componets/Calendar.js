import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import moment from 'moment';

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
    axios.get('http://localhost:3030/api/calendar')
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
            <BigCalendar
              style={{height: '700px', width: '100%'}}
              events={this.state.events}
              defaultView="week"
              views={['week', 'day', 'month']}
              min={moment('2017-01-01 07:00:00').toDate()}
              max={moment('2017-01-01 21:00:00').toDate()}
            />
        }
      </div>
    );
  }
}

export default App;
