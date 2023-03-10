const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    prod_name: Number,
    prod_desc: String,
    prod_price: Number,
    prof_status: String,
    updated_at: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Product', ProductSchema)