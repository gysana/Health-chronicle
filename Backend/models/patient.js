const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  userId:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  condition: { type: String, required: true },
  phone: { type: String },
  address: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);