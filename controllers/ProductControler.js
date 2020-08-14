const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

// Model
const Product = mongoose.model('Product');

router.get('/',(req, res) => {
    res.render('product/form', {
        // productName : 'Asus',
        // productStock: 7,
        viewTitle:'Form Master Product'
    });
});

// insert / update record
router.post('/', (req, res) => {
    // console.log(req.body);
    if (req.body._id == '') {
        insertData(req, res);
    } else {
        updateData(req, res);
    }
});

// List Product
router.get('/list', (req, res) => {
    Product.find((err, docs) => {
        if (!err) {
            res.render('product/list', {
                product : docs,
                viewTitle : 'Data Master Product',
            });
        } else {
            res.render('product/list', {
                message : err
            });
        }
    });
});

// Detail Product
router.get('/:id', (req, res) => {
    Product.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render('product/form', {
                viewTitle: 'Form Update Product',
                product:doc
            })
        } else {
            res.render('product/list', {
                product : docs,
                message : err
            });
        }
    });
});

// Delete Product
router.get('/delete/:id', (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/product/list');
        } else {
            res.render('product/list', {
                product : doc,
                message : err
            });
        }
    })
});

// Search Product
router.get('/search/:input', (req, res) => {
	var input = req.params.input;
	Product.findOne({ name: new RegExp('^' + input + '$', 'i') }, function(err, product) {
		if (err) {
			res.json(err);
		} else {
			res.json(product);
		}
	});
});

function insertData(req, res){
    var product = new Product();
    product.name = req.body.name;
    product.stock = req.body.stock;
    product.save((err, doc) => {
        if (!err) {
            res.redirect('product/list');
            // res.redirect(201, 'product/list');   // statusCode just used if you make some API response
        } else {
            console.log('Insert data is failed');
        }
    });
}

function updateData(req, res){
    Product.findOneAndUpdate(
        { _id : req.body._id }, 
        req.body, 
        { new : true},
        (err, doc) => {
            if (!err) {
                res.redirect('product/list');
            } else {
                res.render('product/form', {
                    viewTitle: 'Update Product',
                    product:doc,
                    message : err
                })
            }
        }
    )
}

module.exports = router;