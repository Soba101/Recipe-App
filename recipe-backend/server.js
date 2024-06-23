const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const recipes = require('./routes/recipes');
const errorHandler = require('./middleware/errorHandler'); // Ensure this path is correct
require('dotenv').config();

// Set up express
const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/recipes', recipes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {});

// Check if MongoDB is connected
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
