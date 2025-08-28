const joi = require('joi');
let products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 55000, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 2000, inStock: true },
  { id: 3, name: "Office Chair", category: "Furniture", price: 7500, inStock: false },
  { id: 4, name: "Notebook", category: "Stationery", price: 50, inStock: true },
  { id: 5, name: "Water Bottle", category: "Accessories", price: 250, inStock: true }
];

const productSchema = joi.object({
  id: joi.number().integer().min(1).required(),
  name: joi.string().min(2).max(100).required(),
  category: joi.string().valid("Electronics", "Furniture", "Stationery", "Accessories").required(),
  price: joi.number().min(0).required(),
  inStock: joi.boolean().required()
});


//create a new product
const createProduct = (req, res) => {
  const { error } = productSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const newProduct = {
    id: products.length + 1,
    ...req.body
  };
  products.push(newProduct);
  res.status(201).send(newProduct);
};

//display all products
const getAllProducts = (req, res) => {
  res.send(products);
};

//display a product by id
const getProductById = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send("Product not found");
  res.send(product);
};

//update a product
const updateProduct = (req, res) => {
  const { error } = productSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send("Product not found");

  product.name = req.body.name;
  product.category = req.body.category;
  product.price = req.body.price;
  product.inStock = req.body.inStock;

  res.send(product);
};

//delete a product
const deleteProduct = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send("Product not found");

  products = products.filter(p => p.id !== parseInt(req.params.id));
  res.send(product);
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};
