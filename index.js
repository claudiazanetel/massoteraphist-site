const express = require('express');
// const path = require('path');
const app = express();

const googleCalendar = require('./GoogleCalendarEvents');

// app.use('/', express.static(path.join(__dirname, 'UI')))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE');
  next();
});

app.get('/api/calendar', (req, res) => {
  googleCalendar.getEvents(events => res.json(events));
});

app.listen(3030, function () {
  console.log('Example app listening on port 3030!');
});

