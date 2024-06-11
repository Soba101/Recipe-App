const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const recipes = require('./routes/recipes'); // Ensure this path is correct
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.use('/api/recipes', recipes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});