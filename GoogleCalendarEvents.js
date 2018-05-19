const moment = require('moment');
const request = require('superagent');
const config = require('./config.js');

const CALENDAR_ID = config.calendar_id;
const API_KEY = config.api_key;
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

exports.getEvents = (callback) => {
  let currentDate= moment().format('YYYY-MM-DD[T]hh:mm:ss[Z]');
  url+='&timeMin='+currentDate
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = [];
        JSON.parse(resp.text).items.filter((event) => {
          return moment(event.end.dateTime).toDate() >= new Date();})
          .map((event) => {
          events.push({
            start: moment(event.start.date || event.start.dateTime).toDate(),
            end: moment(event.end.date || event.end.dateTime).toDate(),
            title: 'non disponibile',
          });
        });
        callback(events);
      } else {
        console.log(err)
      }
    });
};
