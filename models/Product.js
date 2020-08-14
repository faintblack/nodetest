const mongoose = require('mongoose');

// Inisiasi product model sesuai dgn struktur collectionnya di mongodb
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
}, {timestamps:false});

mongoose.model('Product', productSchema, 'product');    // 'Product' is model name, and 'product' is collection name in mongodb