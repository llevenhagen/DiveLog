const express = require('express');
const users = express.Router();
const User = require('../models/users.js');

users.get('/new', (req, res)=> {
  res.render('users/newuser.ejs')
});

users.post('/', (req, res)=> {
  User.create(req.body, (err, createdUser)=> {
    if (err) {
      console.log(err);
    }
    res.redirect('/')
  })
})
module.exports = users;
