const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    date:{
        type:String,
        required:true
    },
    no_inv:{
        type:String,
        required:true
    },
}, {timestamps:false});

mongoose.model('Transaction', productSchema, 'transaction');