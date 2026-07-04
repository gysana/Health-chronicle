const mongoose = require('mongoose');

const healthRecordSchema = new mongoose.Schema({
  patientId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Patient', 
    required: true 
  },
  bloodPressureSystolic: { type: Number },
  bloodPressureDiastolic: { type: Number },
  bloodSugar: { type: Number },
  heartRate: { type: Number },
  oxygenLevel: { type: Number },
  temperature: { type: Number },
  weight: { type: Number },
  cholesterol: { type: Number },
  notes: { type: String },
  recordedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.models.HealthRecord || mongoose.model('HealthRecord', healthRecordSchema);