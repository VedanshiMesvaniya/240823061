const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

const productRoutes = require('./routes/productRoute');
app.use(express.json());

mongoose.connect('mongodb+srv://vedu_db_user:123@myapplication.trtju4l.mongodb.net/?retryWrites=true&w=majority&appName=MyApplication', {
    useNewUrlParser: true,
    useUnifiedTopology: true    
});

app.use('/products', productRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});