const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  patientId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Patient', 
    required: true 
  },
  filename: { type: String, required: true },
  originalName: { type: String, required: true },
  description: { type: String },
  documentDate: { type: Date },
  fileType: { type: String },
}, { timestamps: true });

module.exports = mongoose.models.Document || mongoose.model('Document', documentSchema);