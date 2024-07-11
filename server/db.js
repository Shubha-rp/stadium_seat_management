// db.js
const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL);

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB successfully!');
});