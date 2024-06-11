const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const recipes = require(path.join(__dirname, 'routes', 'recipes'));

app.use('/api/recipes', recipes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});