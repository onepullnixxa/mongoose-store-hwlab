const mongoose = require('mongoose'); //require mongoose
const Schema = mongoose.Schema; // Creates shorthand for the monghoose Schema constructor

const productSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        img: String,
        price: Number,
        qty: Number,
    },
);


const Product = mongoose.model('Product', productSchema);

module.exports = Product;