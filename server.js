const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const leadsRouter = require('./src/routes/leads');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/leads', leadsRouter);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.DB_URI;

async function start() {
  try {
    if (!MONGO_URI) {
      throw new Error('DB_URI is not set in backend/.env');
    }
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  } catch (err) {
    console.error('Failed to start server:', err.message);
    process.exit(1);
  }
}

start();


