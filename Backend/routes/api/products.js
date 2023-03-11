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
    console.log("payload log =>" + payload);
    const product = new Product(payload);
    await product.save();
    res.status(201).end();
    console.log("data log =>" + product);
})

router.put('/api/:id', async (req, res) => {
    const payload = req.body;
    const { id } = req.params;
    const products = await Product.findByIdAndUpdate(id, { $set: payload });
    res.json(products);
})

router.delete('/api/:id', async (req, res) => {
    const payload = req.body;
    const products = await Product.findByIdAndDelete({id});
    res.status(204).end();
})


module.exports = router;