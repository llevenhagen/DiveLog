const express = require('express');
const router = express.Router();
const Sites = require('../models/divesites.js');
const siteSeed = require('../models/site_seed.js');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const User = require('../models/users.js')
const sessions= express.Router();

router.delete('/', (req, res) => {
  req.session.destroy(() => {
    console.log('this is doing something');
    res.redirect('/')
  })
})
router.get('/', (req, res)=> {
  res.render('index.ejs', {
    currentUser: req.session.currentUser
  })
})

router.get('/', (req, res)=> {
  User.find({}, (err, foundUsers)=> {
  res.render('index.ejs', {
    users: foundUsers
  })
})
})
router.get('/logbook', (req, res)=> {
  console.log('hello');
  Sites.find({}, (err, allSites)=> {
    res.render('logbook.ejs', {
      sites: allSites,
      currentUser: req.session.currentUser
    })
  })
})
router.get('/resources', (req, res)=> {
  res.render('resources.ejs', {
  currentUser: req.session.currentUser
  });
})

router.get('/new', (req, res)=> {
  res.render('new.ejs', {
    currentUser: req.session.currentUser
  });
})
router.post('/logbook', (req, res)=> {
  console.log(req.body);
  Sites.create(req.body, (err, createSite)=> {
    res.redirect('/logbook');
  })
})
router.put('/logbook/:id', (req, res)=> {
  Sites.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedSite) => {
    res.redirect('/logbook');
  })
})
router.get('/logbook/:id', (req, res)=> {
  Sites.findById(req.params.id, (err, foundSite)=> {
    res.render('show.ejs', {
      site: foundSite,
      currentUser: req.session.currentUser
    })
  })
})
router.get('/logbook/:id/edit', (req, res)=> {
  Sites.findById(req.params.id, (err, foundSite)=> {
    res.render('edit.ejs', {
      site: foundSite,
      currentUser: req.session.currentUser
    })
  })
})
router.delete('/:id', (req, res)=> {
  Sites.findByIdAndRemove(req.params.id, (err, site)=> {
    res.redirect('/logbook')
  })
})
//Seed Data:
// Sites.create(siteSeed, (err, data)=> {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log('added site seed data');
//   }
// });
module.exports = router;
