const bcrypt = require('bcrypt');
const express = require('express');
const sessions= express.Router();
const User = require('../models/users.js');

sessions.get('/new', (req, res)=> {
  res.render('sessions/newuser.ejs')
})

sessions.post('/', (req, res)=> {
  User.findOne({
    username: req.body.username
  }, (err, foundUser)=> {
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        // console.log(req.body.password, foundUser.password);
      req.session.currentUser = foundUser
      res.redirect('/')
    } else {
      res.send('<a href="/">wrong password</a>')
    }
  })
})


module.exports = sessions;
