const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    prod_name: String,
    prod_price: Number,
    updated_at: { type: Date, default: Date.now }
})

const ProductsModel = mongoose.model('Product', ProductSchema);

module.exports = ProductsModel;