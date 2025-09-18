const express = require('express');
const Router = express.Router();
const productController = require('../controllers/productController');

const {
    createProductSchema,
    updateProductSchema,
    validate,
} = require('../validations/productValidator');

Router.get ('/index', productController.getAllProducts);
Router.get ('/show/:id', productController.getProductById);
Router.post ('/store', validate(createProductSchema), productController.createProduct);

Router.put ('/update/:id', validate(updateProductSchema), productController.updateProduct);
Router.delete ('/delete/:id', productController.deleteProduct);

module.exports = Router;