const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('pages/index');
});

app.get('/rsvp', function(req, res) {
  res.render('pages/rsvp');
});

exports.app = functions.https.onRequest(app);
