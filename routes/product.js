const express = require('express');
const router = express.Router();
const { getProducts, createProduct, updateProduct, deleteProduct, getSingleProduct } = require('../controllers/product');

router.get('/products', getProducts)
router.get('/products/:id', getSingleProduct)
router.post('/products', createProduct)
router.patch('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)

module.exports = router