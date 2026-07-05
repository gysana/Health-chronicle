const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./database');
const patientroutes = require('./routes/patientroutes');
const healthroutes = require('./routes/healthroutes');
const authroutes = require('./routes/authroutes');
const documentroutes = require('./routes/documentroutes');

connectDB();

app.use(cors());
app.use(express.json());

const fs = require('fs');
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
  res.send('Health Chronicle API is running ✅');
});

app.use('/api/patients', patientroutes);
app.use('/api/health', healthroutes);
app.use('/api/auth', authroutes);
app.use('/api/documents', documentroutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});