const express = require('express');
const app = express();
const port = 3001;
var bodyParser = require('body-parser');
const { getDbConnection } = require('./database');
var cors = require('cors');
var router = require('./routes/users');

app.use(bodyParser.json());
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
	);
	res.setHeader('Cache-Control', 'no-cache');
	next();
});

getDbConnection();

app.use('/user', router);
app.listen(port);
console.log(port);
module.exports = app;
