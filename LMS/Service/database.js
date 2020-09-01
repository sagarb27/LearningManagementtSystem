const mongoose = require('mongoose');
function getDbConnection() {
	mongoose.connect(
		'mongodb+srv://root:root@cluster0.qzqys.mongodb.net/LMS?',
		{ useNewUrlParser: true, poolSize: 10 },
		function (err) {
			if (err) {
				console.log(err);
				console.log('ERROR! MONGO MONGOOSE');
				throw err;
			} else {
				console.log('Successfully connected to MongoDB');
			}
		}
	);
	return mongoose.connection;
}

module.exports = { getDbConnection };
