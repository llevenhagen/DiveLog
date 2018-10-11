//dependencies
const express=require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;

//PORT
//Allow use of Heroku port or your own local port, depending on your environment
const PORT = process.env.PORT || 3000

//Database
const MONGODB_URI=process.env.MONGODB_URI || 'mongodb://localhost/dive_log';

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

//use methodoverride
//use PUT and DELETE verbs (HTML only allos GET and POST)
app.use(methodOverride('_method'));

//Routes
app.get('/', (req, res)=> {
  res.send('Hello world')
})

//Listen
app.listen(PORT, ()=> {
  console.log('dive into port ', PORT);
})
