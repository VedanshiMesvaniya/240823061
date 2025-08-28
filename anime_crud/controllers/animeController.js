const joi = require('joi');

const animeData = [
  { "id": 1, "title": "Attack on Titan", "studio": "Wit Studio", "releaseYear": 2013, "rating": 9.0 },
  { "id": 2, "title": "Haikyuu!!", "studio": "Production I.G", "releaseYear": 2014, "rating": 8.7 },
  { "id": 3, "title": "Spirited Away", "studio": "Studio Ghibli", "releaseYear": 2001, "rating": 9.1 }
];

const animeSchema = joi.object(
    {
        id:joi.number().integer().min(1).max(3).required(),
        title:joi.string().min(3).max(20).required(),
        studio:joi.string().min(3).max(20).required(),
        releaseYear:joi.number().integer().min(1900).max(2023).required(),
        rating:joi.number().integer().min(1).max(10).required()
    }
);

//createAnime
const createAnime = (req, res) => {
    const { error } = animeSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    const newAnime = { 
        id: animeData.length + 1,
        ...req.body 
    };
    animeData.push(newAnime);
    res.status(201).json(newAnime);
};

const getAllAnimes = (req, res) => {
    res.json(animeData);
};

const getAnimeById = (req, res) => {
    const anime = animeData.find(a => a.id === parseInt(req.params.id));
    if (!anime) {
        return res.status(404).json({ error: 'Anime not found' });
    }
    res.json(anime);
};

const updateAnime = (req, res) => {
    const { error } = animeSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    const anime = animeData.find(a => a.id === parseInt(req.params.id));
    if (!anime) {
        return res.status(404).json({ error: 'Anime not found' });
    }
    Object.assign(anime, req.body);
    res.json(anime);
};

const deleteAnime = (req, res) => {
    const animeIndex = animeData.findIndex(a => a.id === parseInt(req.params.id));
    if (animeIndex === -1) {
        return res.status(404).json({ error: 'Anime not found' });
    }
    animeData.splice(animeIndex, 1);
    res.status(204).send();
};

module.exports = {
    createAnime,
    getAllAnimes,
    getAnimeById,
    updateAnime,
    deleteAnime
};
