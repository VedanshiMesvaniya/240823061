const express= require('express');
const router= express.Router();
const productController= require('../controllers/productController');

router.get('/index',productController.index);
router.get('/show/:id',productController.show);
router.post('/create',productController.store);
router.put('/update/:id',productController.update);
router.delete('/delete/:id',productController.destroy);

module.exports= router;