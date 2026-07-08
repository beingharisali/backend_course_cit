const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    rating:Number,
    review:String,
    image:String,
})

const productModel = mongoose.model('product', productSchema)

module.exports = productModel