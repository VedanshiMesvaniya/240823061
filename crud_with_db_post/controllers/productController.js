const Product = require('../models/productModel.js');
const { all } = require('../routes/productRoute');


exports.index = (req, res) => {
    Product.find()
        .then((allProducts) => {
            console.log("allProducts:", allProducts);
            res.send({ message: "Songs retrieved successfully", data: allSongs });
        })
        .catch((err) => {
            console.error("Error fetching products:", err);
            res.status(500).json({ error: 'Failed to fetch products' });
        });
};

exports.show = (req, res) => {
    const productId = req.params.id;
    Product.findById(productId)
        .then((product) => {
            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }
            res.send({ message: "Product retrieved successfully", data: product });
        })
        .catch((err) => {
            console.error("Error fetching product:", err);
            res.status(500).json({ error: 'Failed to fetch product' });
        });
};

exports.store = (req, res) => {
    const newProduct = new Product(req.body);
    newProduct.save()
        .then((savedProduct) => {
            res.status(201).json({ message: 'Product created successfully', data: savedProduct });
        })
        .catch((err) => {
            console.error("Error creating product:", err);
            res.status(500).json({ error: 'Failed to create product' });
        });
};

exports.update = (req, res) => {
    const productId = req.params.id;
    Product.findByIdAndUpdate(productId, req.body
        , { new: true })
        .then((updatedProduct) => {
            if (!updatedProduct) {
                return res.status(404).json({ error: 'Product not found' });
            }
            res.json({ message: 'Product updated successfully', data: updatedProduct });
        })
        .catch((err) => {
            console.error("Error updating product:", err);
            res.status(500).json({ error: 'Failed to update product' });
        });
};

exports.delete = (req, res) => {
    const productId = req.params.id;
    Product.findBy
    IdAndDelete(productId)
        .then((deletedProduct) => {
            if (!deletedProduct) {
                return res.status(404).json({ error: 'Product not found' });
            }
            res.json({ message: 'Product deleted successfully' });
        })
        .catch((err) => {
            console.error("Error deleting product:", err);
            res.status(500).json({ error: 'Failed to delete product' });
        });
};



