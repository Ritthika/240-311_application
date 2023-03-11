const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../../amongoose/Product');

router.get('/api', async (req, res) => {
    const products = await Product.find({});
    res.json(products);
})

router.post('/api', async (req, res) => {
    const payload = req.body;
    const product = new Product(payload);
    await product.save();
    res.status(201).end();
})

router.put('/api/:id', async (req, res) => {
    const payload = req.body;
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, { $set: payload });
    res.json(product);
})

router.delete('/api/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    res.status(204).end();
})


module.exports = router;