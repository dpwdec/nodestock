const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 8080;

// Set Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const otherstuff = "This is other stuff!";

// Set handlebar routes
app.get('/', function (req, res) {
  res.render('home', {
    stuff: otherstuff
  });
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(8080, '127.0.0.1', () => console.log('Server listening on port ' + PORT));

//https://3932543f9b39408a85445159cd66b1cb.vfs.cloud9.eu-west-2.amazonaws.com/