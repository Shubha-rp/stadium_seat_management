const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const PORT = 8000;
require('dotenv').config();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || ['http://localhost:5173'].includes(origin)) {
      callback(null, true);
    } else {

      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));






app.get('/', (req, res) => {
  res.json({ message: 'Hello' });
});


const matchSchema = new mongoose.Schema({
  matchId: { type: String, required: true, unique: true },
  match: {
    number: Number,
    teams: {
      team1: String,
      team2: String
    },
    match_date: String,
    match_time: String,
    venue: {
      name: String,
      location: String
    },
    ticket_info: {
      price_starts_from: String
    }
  }
});




const Matches = mongoose.model('Match', matchSchema, 'Cricket_Matches');

// Create a new cricket match
app.post('/api/cricketmatches', async (req, res) => {
  try {
    const newMatch = new Match({
      matchId: uuidv4(), // Generate a unique matchId
      match: req.body.match,
    });

    const savedMatch = await newMatch.save();
    res.status(201).json(savedMatch);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get('/api/cricketmatches', async (req, res) => {
    try {
      const cricketMatches = await Matches.find().exec();
      res.json(cricketMatches);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: 'Error fetching cricket matches' });
    }
  });

  

  const bookedSeatsSchema = new mongoose.Schema({
    matchId: { type: String, required: true },
    section: { type: String, required: true },
    row: { type: Number, required: true },
    seat: { type: Number, required: true },
  });
  
  const BookedSeat = mongoose.model('BookedSeat', bookedSeatsSchema, 'bookedSeats');

  
  
  
  // Example endpoint handler in Express.js
  app.post('/api/booked-seats', async (req, res) => {
    try {
      const { matchId, section, row, seat } = req.body;
      const newBookedSeat = new BookedSeat({ matchId, section, row, seat });
      await newBookedSeat.save();
      res.status(201).send('Booked seat saved successfully');
    } catch (error) {
      console.error('Error saving booked seat:', error);
      res.status(500).send('Error saving booked seat');
    }
  });
    
  // Get booked seats for a specific match
app.get('/api/booked-seats/:matchId', async (req, res) => {
  try {
    const matchId = req.params.matchId;
    const bookedSeats = await BookedSeat.find({ matchId }).exec();
    res.json({ bookedSeats });
  } catch (err) {
    console.error('Error fetching booked seats:', err);
    res.status(500).send({ message: 'Error fetching booked seats' });
  }
});

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB successfully!');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });



  // const bodyParser = require("body-parser"); router.use(bodyParser.json());
  //stadium
  // Define the stadium schema
const stadiumSchema = new mongoose.Schema({
  stadiumid: { type: String, required: true, unique: true },
  stadiumname: { type: String, required: true },
  location: { type: String, required: true },
  capacity: { type: Number, required: true }
});





// Create the Stadium model
const Stadium = mongoose.model('Stadium', stadiumSchema, 'Stadiums');
// Sample data (populate the database with sample data if empty)
const sampleStadium = new Stadium({
  stadiumid: '1',
  stadiumname: 'Narendra Modi Cricket Stadium',
  location: 'Ahmedabad, India',
  capacity: 132000
});

async function initializeSampleData() {
  try {

    // console.log("It Exists");
    const stadium = await Stadium.findOne({ stadiumid: '1' });
    if (!stadium) {
      await sampleStadium.save();
    }
  } catch (err) {
    console.error('Error initializing sample data:', err);
  }
}
initializeSampleData();

// Endpoint to get stadium data
app.get('/api/stadium', async (req, res) => {
  try {
    const stadium = await Stadium.findOne({ stadiumid: '1' });
    if (!stadium) {
      return res.status(404).json({ message: 'Stadium not found' });
    }
    res.json(stadium);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});