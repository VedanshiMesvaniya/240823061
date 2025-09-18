const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema({
    id: Number,  // manual auto-increment
  title: String,
  genre: String,
  studio: String,
  releaseYear: Number,
  rating: Number,
  description: String
});

const Anime = mongoose.model('Anime', animeSchema);