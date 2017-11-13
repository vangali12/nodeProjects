var express = require("express");
var bp = require("body-parser");
var session = require("express-session");
var path = require("path");
var port = 8000;

var app = express();

app.use(bp.urlencoded({extended:true}));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	return res.render('index');
});

app.post('/submit', function(req, res) {
	console.log(req.body);
	return res.render('submit', {name: req.body.name, dojo: req.body.dojo, lang: req.body.lang, comment: req.body.comment});
});

app.listen(port, function() {
	console.log(`We are listening on port ${port}`)
})