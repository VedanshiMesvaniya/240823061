const express = require('express');
const animeRoutes= require("./routes/animeRoutes");
const app = express();

app.use('/animes', animeRoutes);
app.use(express.json());

app.listen(3020, () => {
  console.log('Server is running on http://localhost:3020');
});