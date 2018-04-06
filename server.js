// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var hbs = require('express-handlebars');
require('dotenv').config();
// Require the routes and use them
var routes = require('./routes/routes');

// Initialize Express
var app = express();

// set up the HBS view engine
app.engine('hbs', hbs({defaultLayout: 'main', extname: 'hbs', partialsDir: [__dirname + '/views/partials']}));
app.set('view engine', 'hbs');

// Use morgan for debug logging
app.use(logger("dev"));

// set up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

// set the public static directory
app.use(express.static('public'));

// bring in the routes
app.use('/', routes);

app.set('port', (process.env.PORT || 1337));
// set the port
//var port = process.env.PORT || 3000;
// Start up the express server & listen on port 3000 defined above
app.listen(PORT, function() {
	console.log("App running on port:", PORT);
});