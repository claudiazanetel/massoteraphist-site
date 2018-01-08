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
    console.log(this.state.events);
    return (
      <div>
        {
          this.state.isLoading ? 
            <p> Loading </p> : 
            <BigCalendar
              style={{height: '700px'}}
              events={this.state.events}
              defaultView="week"
              views={['week', 'day', 'month']}
            />
        }
      </div>
    );
  }
}

export default App;
