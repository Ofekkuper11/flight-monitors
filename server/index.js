const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// התחברות ל-MongoDB
mongoose.connect('mongodb://localhost:27017/flight', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// הגדרת מודל למסד נתונים
const DataSchema = new mongoose.Schema({
  altitude: Number,
  hsi: Number,
  adi: Number,
  timestamp: { type: Date, default: Date.now }
});

const FlightData = mongoose.model('FlightData', DataSchema);

// API לקליטת נתונים
app.post('/api/data', async (req, res) => {
  const { altitude, hsi, adi } = req.body;
  const data = new FlightData({ altitude, hsi, adi });
  await data.save();
  res.send({ message: 'Data saved!' });
});

app.listen(5000, () => console.log('Server running on port 5000'));
