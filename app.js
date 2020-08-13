require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const handlebars = require('handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');

const productController = require('./controllers/ProductControler');

var app = express();

app.set('views', path.join(__dirname, '/views/layouts/'));
app.engine('hbs', exphbs({
    extname:'hbs', 
    defaultLayout:'mainLayout', 
    layoutsDir:__dirname + '/views/layouts/',
    handlebars:allowInsecurePrototypeAccess(handlebars)
}));
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());

app.listen(7588, () => {
    console.log('Server is running at port 7588');
});

//Routing
app.use('/product', productController);