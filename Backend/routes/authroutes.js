const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Patient = require('../models/patient');
const HealthRecord = require('../models/HealthRecord');
const Document = require('../models/Document');

const SECRET = process.env.JWT_SECRET;

// Register - creates user AND patient together
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, age, gender, condition, phone, address } = req.body;

    // Basic presence check
    if (!name || !email || !password || !age || !gender || !phone || !address) {
      return res.status(400).json({ message: 'All required fields must be filled.' });
    }

  // Phone validation - Indian mobile number (10 digits, starts with 6-9)
  const phoneDigits = String(phone).replace(/\D/g, '');
  if (!/^[6-9]\d{9}$/.test(phoneDigits)) {
    return res.status(400).json({ message: 'Please enter a valid 10-digit Indian mobile number.' });
  }

  // Address sanity check
  if (address.trim().length < 10) {
    return res.status(400).json({ message: 'Please enter a complete address.' });
  }

   

    // Age validation
    if (age < 0 || age > 120) {
      return res.status(400).json({ message: 'Please enter a valid age.' });
    }

    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return res.status(400).json({ message: 'Please enter a valid email address.' });
    }

   // Password strength - at least 6 chars, must contain a letter and a number
   const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
   if (!passwordPattern.test(password)) {
     return res.status(400).json({ message: 'Password must be at least 6 characters and include both letters and numbers.' });
   }

    // Check if user already exists
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'Email already registered!' });
    }

    // Encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    // Create patient automatically linked to user
    const patient = new Patient({
      userId: user._id,
      name,
      age,
      gender,
      condition,
      phone: phoneDigits,
      address
    });
    await patient.save();

    res.status(201).json({ message: 'Registration successful!' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Email not found!' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect password!' });
    }

    // Find patient linked to this user
    const patient = await Patient.findOne({ userId: user._id });

    const token = jwt.sign({ userId: user._id, name: user.name }, SECRET, { expiresIn: '7d' });

    res.json({
      message: 'Login successful!',
      token,
      name: user.name,
      patientId: patient ? patient._id : null
    });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
});
// Delete account - removes user, patient, health records, and documents
router.delete('/delete', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Not authenticated.' });
    }

    const { password } = req.body;
    if (!password) {
      return res.status(400).json({ message: 'Password is required to delete account.' });
    }

    const decoded = jwt.verify(token, SECRET);
    const userId = decoded.userId;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect password.' });
    }

    const patient = await Patient.findOne({ userId });

    if (patient) {
      await HealthRecord.deleteMany({ patientId: patient._id });
      await Document.deleteMany({ patientId: patient._id });
      await Patient.deleteOne({ _id: patient._id });
    }

    await User.deleteOne({ _id: userId });

    res.json({ message: 'Account deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting account', error });
  }
});
module.exports = router;