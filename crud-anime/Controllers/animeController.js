const Anime = require("../Models/animeModel");
const Joi = require("joi");

// Joi validation schema
const animeSchema = Joi.object({
  title: Joi.string().min(3).required(),
  genre: Joi.string().required(),
  studio: Joi.string().required(),
  releaseYear: Joi.number().integer().min(1900).max(new Date().getFullYear()).required(),
  rating: Joi.number().min(0).max(10).required(),
  description: Joi.string().min(5).required()
});

// Helper function for auto-increment ID
const getNextId = () => {
  return Anime.findOne().sort({ id: -1 }).then(last => (last ? last.id + 1 : 1));
};

// CREATE
exports.createAnime = (req, res) => {
  const { error } = animeSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  getNextId()
    .then(newId => {
      const anime = new Anime({ id: newId, ...req.body });
      return anime.save();
    })
    .then(data => res.status(201).json(data))
    .catch(err => res.status(500).json({ error: err.message }));
};

// READ ALL
exports.getAnimes = (req, res) => {
  Anime.find()
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: err.message }));
};

// READ ONE
exports.getAnimeById = (req, res) => {
  Anime.findOne({ id: req.params.id })
    .then(data => {
      if (!data) return res.status(404).json({ error: "Anime not found" });
      res.json(data);
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

// UPDATE
exports.updateAnime = (req, res) => {
  const { error } = animeSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  Anime.findOneAndUpdate({ id: req.params.id }, req.body, { new: true })
    .then(data => {
      if (!data) return res.status(404).json({ error: "Anime not found" });
      res.json(data);
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

// DELETE
exports.deleteAnime = (req, res) => {
  Anime.findOneAndDelete({ id: req.params.id })
    .then(data => {
      if (!data) return res.status(404).json({ error: "Anime not found" });
      res.json({ message: "Anime deleted successfully" });
    })
    .catch(err => res.status(500).json({ error: err.message }));
};
