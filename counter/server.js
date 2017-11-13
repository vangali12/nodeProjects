var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");

var app = express();

app.use(session({secret: 'ta_henry'}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req,res) {
	if (req.session.count == null) {
		req.session.count = 0;
	} else {
		req.session.count ++;
	}
	console.log(req.session.count);
	res.render('index', {counter: req.session.count});
});

app.listen(8000, function() {
	console.log("Listening on port 8000");
})