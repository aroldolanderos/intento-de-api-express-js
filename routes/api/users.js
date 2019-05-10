const express = require('express');
const router = express.Router();
const userMocks = require('../../utils/mocks/users');

router.get('/', function(req, res) {
    const { query } = req.query;

    res.status(200).json({
        data: userMocks,
        message: 'users listed'
    });
});

router.get('/:userId', function(req, res) {
    const { productId } = req.params;

    res.status(200).json({
        data: userMocks[0],
        message: 'user retrieved'
    });
});

router.post('/', function(req, res) {

    res.status(201).json({
        data: userMocks[0],
        message: 'users listed'
    });
});

router.put('/:userId', function(req, res) {

    res.status(200).json({
        data: userMocks,
        message: 'users updated'
    });
});

router.delete('/', function(req, res) {

    res.status(200).json({
        data: userMocks[0],
        message: 'users deleted'
    });
});


module.exports = router;
