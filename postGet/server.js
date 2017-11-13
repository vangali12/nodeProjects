var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

app.set('views', __dirname + "/views");
app.set('view engine', "ejs");

app.use(session({secret: 'codingdojorocks'}));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
	res.render('index', {title: "my Express project"});
});

app.get('/users/:id', function(req,res) {
	console.log("The user id requested is: ", req.params.id);
	res.send("You requested the user with id: " + req.params.id);
});

app.post('/users', function(req, res) {
	req.session.name = req.body.name;
	console.log(req.session.name);
	res.redirect('/');
})

app.listen(8000, function() {
	console.log("Listening on port 8000");
})