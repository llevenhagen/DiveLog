//dependencies
const express=require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;
const Sites = require('./models/divesites.js');
const router = express.Router();
const siteSeed = require('./models/site_seed.js');

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


//static files Middleware
app.use(express.static('public'));
//use methodoverride
//use PUT and DELETE verbs (HTML only allos GET and POST)
app.use(methodOverride('_method'));

// connect to divesites controller
const sitesController = require('./controllers/divesites.js');
app.use('/divesites', sitesController)
//Routes

app.get('/', (req, res)=> {
  res.render('index.ejs')
})
app.get('/logbook', (req, res)=> {
  console.log('hello');
  Sites.find({}, (err, allSites)=> {
    res.render('logbook.ejs', {
      sites: allSites
    })
  })
})
app.get('/resources', (req, res)=> {
  res.render('resources.ejs');
})

app.get('/new', (req, res)=> {
  res.render('new.ejs');
})
app.post('/logbook', (req, res)=> {
  console.log(req.body);
  Sites.create(req.body, (err, createSite)=> {
    res.redirect('/logbook');
  })
})
app.put('/logbook/:id', (req, res)=> {
  Sites.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedSite) => {
    res.redirect('/logbook');
  })
})
app.get('/logbook/:id', (req, res)=> {
  Sites.findById(req.params.id, (err, foundSite)=> {
    res.render('show.ejs', {
      site: foundSite
    })
  })
})
app.get('/logbook/:id/edit', (req, res)=> {
  Sites.findById(req.params.id, (err, foundSite)=> {
    res.render('edit.ejs', {
      site: foundSite
    })
  })
})
app.delete('/:id', (req, res)=> {
  Sites.findByIdAndRemove(req.params.id, (err, site)=> {
    res.redirect('/logbook')
  })
})

// Sites.create(noscTower, (error, site)=> {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(site);
//   }
//   db.close();
// })
//Listen
app.listen(PORT, ()=> {
  console.log('dive into port ', PORT);
})
