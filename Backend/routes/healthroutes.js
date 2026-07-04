const express = require('express');
const router = express.Router();
const HealthRecord = require('../models/healthrecord');

// Add a health record
router.post('/add', async (req, res) => {
  try {
    const record = new HealthRecord(req.body);
    await record.save();
    res.status(201).json({ message: 'Health record added!', record });
  } catch (error) {
    res.status(500).json({ message: 'Error adding record', error });
  }
});

// Get all records for a patient
router.get('/:patientId', async (req, res) => {
  try {
    const records = await HealthRecord.find({ 
      patientId: req.params.patientId 
    }).sort({ recordedAt: -1 });
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching records', error });
  }
});

module.exports = router;