const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  contato: { type: String, required: true },
  data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lead', leadSchema);