const Site = require('../models/divesites.js');
const express = require('express');
const router = express.Router();
const Sites = require('../models/divesites.js');
const siteSeed = require('../models/site_seed.js');


router.get('/logbook', (req, res)=> {
  Sites.find({}, (err, allSites)=> {
    res.render('logbook.ejs', {
      sites: allSites
    })
  })
})


module.exports = router;
