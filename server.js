//dependencies
const express=require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;
const session = require('express-session');
const User = require('./models/users.js')
//PORT
//Allow use of Heroku port or your own local port, depending on your environment
const PORT = process.env.PORT || 3000

//Database
// const MONGODB_URI=process.env.MONGODB_URI || 'mongodb://localhost/dive_log';
const MONGODB_URI= process.env.MONGODB_URI || "mongodb://heroku_6dpppncx:r0nck1b4aerisa1nndu5c3bj0l@ds229373.mlab.com:29373/heroku_6dpppncx" || "mongodb://localhost/dive_log";
const HEROKU_CONNECT = "mongodb://llevenhagen:iloveicecream1@ds229373.mlab.com:29373/heroku_6dpppncx"
mongoose.connect(HEROKU_CONNECT, {useNewUrlParser: true});
//Connect to mongo
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

//Error / Success
db.on('error', (err)=> console.log(err.message + 'is Mongod not running?'));
db.on('connected', ()=> console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));


//open the connection to mongo
db.on('open', ()=> {});

//Middleware
//use public folder for static assets, like class.
app.use(express.static('public'))

//populates req.body with parsed info from forms, if no data from forms, it will return an empty object
app.use(express.urlencoded({extended:false}));


//static files Middleware
app.use(express.static('public'));
//use methodoverride
//use PUT and DELETE verbs (HTML only allos GET and POST)
app.use(methodOverride('_method'));
app.use(express.json());

app.use(session({
  secret: 'feelixisadorable',
  resave: false,
  saveUninitialized: false
}))
// connect to divesites controller
const sitesController = require('./controllers/divesites.js');
app.use(sitesController)

const sessionController = require('./controllers/sessions.js');
app.use('/sessions', sessionController)

const userController = require('./controllers/users.js');
app.use('/users', userController)
//Routes
// app.get('/', (req, res)=> {
//   res.render('index.ejs', {
//     currentUser: req.session.currentUser
//   })
// })
//Listen
app.listen(PORT, ()=> {
  console.log('dive into port ', PORT);
})
