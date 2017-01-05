const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  mongoose = require('mongoose'),
  passport = require('passport'),
  config = require('./server/config/database'), // get db config file
  UserModel = require('./server/data/models/User'),
  LocationModel = require('./server/data/models/Location'),
  path = require('path'),
  port = process.env.PORT || 3000;

// Allow CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
  next();
});

app.use(express.static(path.join(__dirname, 'dist')))

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
LocationModel.init();
 
// pass passport for configuration
require('./server/config/passport')(passport);
 
// bundle our routes
let apiRoutes = express.Router();

let usersController = require('./server/controllers/UsersController');
// get user by id
apiRoutes.get('/users/:id', usersController.getById);
// create a new user account (POST http://localhost:3000/api/signup)
apiRoutes.post('/signup', usersController.postRegister);
// log in and get a token (POST http://localhost:3000/api/authenticate)
apiRoutes.post('/authenticate', usersController.postAuthenticate);
// update existing user (POST http://localhost:3000/api/updateUserInfo)
apiRoutes.post('/updateUserInfo', passport.authenticate('jwt', { session: false }), usersController.postUpdate);
// delete existing user (POST http://localhost:3000/api/deleteUser)
apiRoutes.post('/deleteUser', passport.authenticate('jwt', { session: false }), usersController.postDelete);

let locationsController = require('./server/controllers/LocationsController');

apiRoutes.get('/locations/read', locationsController.getAll);
apiRoutes.get('/locations/read/:id', locationsController.getById);
apiRoutes.post('/locations/create', passport.authenticate('jwt', { session: false }), locationsController.postCreate);
apiRoutes.post('/locations/update', passport.authenticate('jwt', { session: false }), locationsController.postUpdate);

// connect the api routes under /api/*
app.use('/api', apiRoutes);
 
// Start the server
app.listen(port);
console.log('There will be dragons: http://localhost:' + port);
