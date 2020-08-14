const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);    // Use for findOneAndUpdate() & findOneAndDelete() method, because that function is deprecated
mongoose.connect('mongodb://localhost/nodetest', {  // nodetest is dbname
        useNewUrlParser: true,      // it used because current URL string parser is deprecated and will be removed in future version
        useUnifiedTopology: true,   // it used because current server discovery and monitoring engine is deprecated
        // useCreateIndex : true
    },
    (err) => {
	if (!err) {
		console.log('Connected to mongodb');
	} else {
		console.log(err);
	}
});

require('./Product');       // include Product model
require('./Transaction');