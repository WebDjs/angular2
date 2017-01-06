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

// serve dist folder, html, and files as static, and the /api routes as is
app.use(express.static(path.join(__dirname, 'dist')));
app.use(function(req, res, next){
  let accept = req.accepts('html', 'json', 'xml'),
    ext = path.extname(req.path);

  if(accept !== 'html' || ext !== '' || req.path.startsWith('/api/')) {
    return next();
  }

  res.sendFile(path.join(__dirname, 'dist') + '/index.html');
});

// get our request parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
// log to console
app.use(morgan('dev'));
 
// Use the passport package in our application
app.use(passport.initialize());
 
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
// create a new user account (POST /api/signup)
apiRoutes.post('/signup', usersController.postRegister);
// log in and get a token (POST /api/authenticate)
apiRoutes.post('/authenticate', usersController.postAuthenticate);
// update existing user (POST /api/updateUserInfo)
apiRoutes.post('/updateUserInfo', passport.authenticate('jwt', { session: false }), usersController.postUpdate);
// delete existing user (POST /api/deleteUser)
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
