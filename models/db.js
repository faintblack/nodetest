const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/nodetest', { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex : true
    },
    (err) => {
	if (!err) {
		console.log('Connected to mongodb');
	} else {
		console.log(err);
	}
});

require('./Product');