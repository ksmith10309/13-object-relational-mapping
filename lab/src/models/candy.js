const mongoose = require('mongoose');

// Define schema
var candySchema = new mongoose.Schema({
  name: String,
  chocolate: Boolean,
});

// Create model
var Candy = mongoose.model('Candy', candySchema);

// Add twix to the database for testing purposes
var twix = new Candy({ name: 'Twix', chocolate: true });
console.log('TEST CANDY', twix.name);
console.log('TEST ID', twix._id);

twix.save(function (err, twix) {
  if (err) return console.error(err);
});

// Console logs all the candy in the database
Candy.find(function (err, candy) {
  if (err) return console.error(err);
  console.log('DATABASE CONTENTS', candy);
});

// Export model
export default Candy;
