const express = require('express');
const Sequelize = require('sequelize');

const productRoutes = require('./routes/productRoutes');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
