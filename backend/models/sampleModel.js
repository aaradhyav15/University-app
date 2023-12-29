// models/SampleModel.js
const mongoose = require('mongoose');

// Sample Schema
const sampleSchema = new mongoose.Schema({
  name: String,
  description: String,
  // Add more fields...
});

const SampleModel = mongoose.model('Sample', sampleSchema);

module.exports = SampleModel;
