const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    Id: {
        type: String, required: true, unique: true, autoIncrement: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }

});