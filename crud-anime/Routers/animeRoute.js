const express = require("express");
const router = express.Router();
const animeController = require("../Controllers/animeController");

router.post("/", animeController.createAnime);
router.get("/", animeController.getAnimes);
router.get("/:id", animeController.getAnimeById);
router.put("/:id", animeController.updateAnime);
router.delete("/:id", animeController.deleteAnime);

module.exports = router;
