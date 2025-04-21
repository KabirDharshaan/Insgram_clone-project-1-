const mongoose = require('mongoose');

const wishSchema = new mongoose.Schema({
  wish: { type: String, required: true },
});

const Wish = mongoose.model('Wish', wishSchema);

module.exports = Wish;
