const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Document = require('../models/document');

// Storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Upload document
router.post('/upload', upload.single('document'), async (req, res) => {
  try {
    const { patientId, description, documentDate } = req.body;
    const doc = new Document({
      patientId,
      filename: req.file.filename,
      originalName: req.file.originalname,
      description,
      documentDate,
      fileType: req.file.mimetype,
    });
    await doc.save();
    res.status(201).json({ message: 'Document uploaded!', doc });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading document', error });
  }
});

// Get all documents for a patient
router.get('/:patientId', async (req, res) => {
  try {
    const docs = await Document.find({ 
      patientId: req.params.patientId 
    }).sort({ createdAt: -1 });
    res.json(docs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching documents', error });
  }
});

module.exports = router;