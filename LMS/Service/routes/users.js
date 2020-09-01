var express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
//const { getDbConnection } = require('../database');
var { user } = require('../models/UserSchema');

function getConnection() {
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
router.post('/loginUser',async(req,res) => {
    console.log('bonde Calling');
    var db = getConnection();
    db.on('error', console.error.bind(console, 'connection error:'));
	console.log(req.body);
	user.find({
		email: req.body.email, // search query
	}).then((doc) => {
		if (doc.length !== 0) {
			console.log('Success');
            console.log(doc[0]);

            if(doc[0].password === req.body.password){
                res.statusCode = 200;
                return res.json(doc[0]);
            } else {
                res.statusCode = 400;
                return res.json({ errors: ['Invalid Login Credentials'] });
            }
        }	
	}).catch(error=>{
        res.statusCode = 500;
		return res.json({ errors: ['Internal Server error'] });
    });
});
router.post('/createUser', async (req, res) => {
	console.log('sagar calling');
	var db = getConnection();
	db.on('error', console.error.bind(console, 'connection error:'));
	console.log(req.body);
	var newUser = new user({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password,
		phoneNo: '',
		address: '',
		profilePic: '',
	});

	console.log('Connection Successful!');
	var result = await newUser.save(function (err, user) {
		if (err) {
			console.error(err);
			res.statusCode = 500;
			return res.json({ errors: ['Cannot insert the user details'] });
		}
		res.statusCode = 200;
		return res.json(user);
	});
});
router.get('/getAll', async (req, res) => {
	try {
		var users = await user.find({});
		console.log(users);
		return res.json(users);
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
