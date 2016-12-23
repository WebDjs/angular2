const express = require('express'),
 app = express(),
 bodyParser = require('body-parser'),
 morgan = require('morgan'),
 mongoose = require('mongoose'),
 passport = require('passport'),
 config = require('./server/config/database'), // get db config file
 UserModel = require('./server/data/models/User'), // get the mongoose model
 port = process.env.PORT || 3000;

// Allow CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// get our request parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
// log to console
app.use(morgan('dev'));
 
// Use the passport package in our application
app.use(passport.initialize());
 
// demo Route (GET http://localhost:3000)
app.get('/', function(req, res) {
  res.send('Hello! The API is at http://localhost:' + port + '/api');
});

// connect to database
mongoose.connect(config.database);
UserModel.init();
 
// pass passport for configuration
require('./server/config/passport')(passport);
 
// bundle our routes
let apiRoutes = express.Router();

let usersController = require('./server/controllers/UsersController');
// create a new user account (POST http://localhost:3000/api/signup)
apiRoutes.post('/signup', usersController.postRegister);
// log in and get a token (POST http://localhost:3000/api/authenticate)
apiRoutes.post('/authenticate', usersController.postAuthenticate);
 
// connect the api routes under /api/*
app.use('/api', apiRoutes);
 
// Start the server
app.listen(port);
console.log('There will be dragons: http://localhost:' + port);
