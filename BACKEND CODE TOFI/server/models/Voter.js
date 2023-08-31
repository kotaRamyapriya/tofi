const mongoose = require('mongoose');

const voterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  boothNumber: {
    type: String,
    required: true,
  },
  // Other voter details
});

module.exports = mongoose.model('Voter', voterSchema);
