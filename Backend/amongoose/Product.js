const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        prod_name: String,
        prod_price: Number,
    },
    {
        timestamps: true, versiionKey: false
    }
);

const ProductsModel = mongoose.model('Product', ProductSchema);

module.exports = ProductsModel;