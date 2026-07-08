const express = require('express');
const router = express.Router();
const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/product');

router.get('/products', getProducts)
router.post('/products', createProduct)
router.patch('/product/1', updateProduct)
router.delete('/product/1', deleteProduct)

module.exports = router