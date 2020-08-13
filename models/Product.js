const mongoose = require('mongoose');

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

mongoose.model('Product', productSchema, 'product');