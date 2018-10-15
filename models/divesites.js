const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({
  img: String,
  date: Date,
  city: String,
  country: String,
  name: String,
  buddies: [String],
  weather: String,
  diveTime: String,
  airConsumption: Number,
  maxDepth: Number,
  wildlife: [String],
  additionalComments: String,
  rating: {type: Number, min: 0, max: 10}
})

const Site = mongoose.model('Site', siteSchema);

module.exports = Site;
