const express = require('express');
const router = express.Router();
// const productMocks = require('../../utils/mocks/products');
const ProductsService = require('../../services/products');

const productsService = new ProductsService();

router.get('/', async function(req, res, next) {
    const { tags } = req.query;
    console.log(req.query);
    try {
        const products = await productsService.getProducts({ tags });
        res.status(200).json({
            data: products,
            message: 'products listed'
        });
    } catch (err) {
        next(err);
    }
});

router.get('/:productId', async function(req, res, next) {
    const { productId } = req.params;
    console.log(productId);
    try {
        const product = await productsService.getProduct({ productId });
        res.status(200).json({
            data: product,
            message: 'product retrieved'
        });
    } catch (err) {
        next(err);
    }
});

router.post('/', async function(req, res, next) {
    const { body: product } = req;
    console.log("req", req.body);
    console.log("product", product);
    try {
        const createdProduct = await productsService.createProduct({ product });
        res.status(201).json({
            data: createdProduct,
            message: 'products listed'
        });
    } catch (err) {
        next(err);
    }
});

router.put('/:productId', async function(req, res, next) {
    const { productId } = req.params;
    const { body: product } = req;
    try {
        const updateProduct = await productsService.updateProduct({ productId, product });
        res.status(200).json({
            data: updateProduct,
            message: 'products updated'
        });
    } catch (err) {
        next(err);
    }
});

router.delete('/:productId', function(req, res, next) {
    const { productId } = req.params;
    const product = productsService.deleteProduct({ productId });
    try {
        res.status(200).json({
            data: product,
            message: 'products deleted'
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
