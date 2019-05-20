const express = require('express')
const app = express();
const ejs = require('ejs');
var bodyParser = require('body-parser');
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.listen(port, function () {
	console.log('Server is running...');
});

app.get('/register', function(req, res) {
	res.render('register');
});

app.post('/register', function(req, res) {
	res.send('Chao mung ' + req.body.name + ' den voi Nodejs!');
});
