const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../amongoose/Product');

router.get('/', async (req, res) => {
    const products = await Product.find({});
    res.json(products);
})

router.post('/', async (req, res) => {
    const payload = req.body;
    const product = new Product(payload);
    await product.save();
    res.status(201).end();
})

router.put('/:id', async (req, res) => {
    const payload = req.body;
    const { id } = req.params;
    const products = await Product.findByIdAndUpdate(id, { $set: payload });
    res.json(products);
})

router.delete('/:id', async (req, res) => {
    const payload = req.body;
    const products = await Product.findByIdAndDelete({id});
    res.status(204).end();
})


module.exports = router;