//challenge from freeCodeCamp.org
var express = require('express');
var app = express();
const moment = require('moment');
moment().format();

app.get('/api', function (req, res) {
  res.json({
    unix: new Date().getTime(),
    utc: new Date().toUTCString(),
  });
});

app.get('/api/:date', (req, res) => {
  const date = req.params.date;
  var start = moment(date);

  // checking if received string is a number
  if (!isNaN(date)) {
    res.json({
      unix: new Date(parseInt(date)).getTime(),
      utc: new Date(parseInt(date)).toUTCString(),
    });
  }
  // checking if received string is a date
  else if (moment.utc(date, 'YYYY-MM-DD', true).isValid() || start.isValid()) {
    res.json({
      unix: new Date(date).getTime(),
      utc: new Date(date).toUTCString(),
    });
  } else {
    res.json({
      error: 'Invalid Date',
    });
  }
});
