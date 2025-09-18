const express = require("express");
const mongoose = require("mongoose");

const animeRoutes = require("./Routers/animeRoute");

const app = express();
app.use(express.json());


mongoose.connect("mongodb+srv://vedu_db_user:123@myapplication.trtju4l.mongodb.net/?retryWrites=true&w=majority&appName=MyApplication")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(" DB Error:", err));

app.use("/anime", animeRoutes);

app.listen(3020, () => console.log("Server running on port: https://localhost:3020"));
