require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// handlebars const
const handlebars = require('handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

// Express JS Initiation
var app = express();

app.set('views', path.join(__dirname, '/views/layouts/'));
app.engine(
	'hbs',
	exphbs({
		extname: 'hbs',
		defaultLayout: 'mainLayout',
		layoutsDir: __dirname + '/views/layouts/',
		handlebars: allowInsecurePrototypeAccess(handlebars)
	})
);
app.set('view engine', 'hbs');
// Making middleware function to serve files
app.use(express.static('public'));
// Using body-parser
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
// Set datatype in body-parser like POST assignment
app.use(bodyParser.json());

// Home Route
app.get('/', (req, res) => {
	var dateTime = new Date();
	res.render('penjualan', {
		date: dateTime.toISOString().split('T')[0]
	});
});

// get ProductController which is all route about Product is there
const productController = require('./controllers/ProductControler');

//Routing
app.use('/product', productController);     // Use product route in ProductController.js

app.listen(7588, () => {
	console.log('Server is running at port 7588');
});

