const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');
const jwt = require('jsonwebtoken');

const SECRET = 'healthchronicle_secret_key';

function getUserId(req) {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return null;
    const decoded = jwt.verify(token, SECRET);
    return decoded.userId;
  } catch (e) {
    return null;
  }
}

// Add a new patient
router.post('/add', async (req, res) => {
  try {
    const userId = getUserId(req);
    const patient = new Patient({ ...req.body, userId });
    await patient.save();
    res.status(201).json({ message: 'Patient added successfully!', patient });
  } catch (error) {
    res.status(500).json({ message: 'Error adding patient', error });
  }
});

// Get only logged in user's patients
router.get('/all', async (req, res) => {
  try {
    const userId = getUserId(req);
    const patients = await Patient.find({ userId });
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching patients', error });
  }
});

module.exports = router;