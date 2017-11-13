
var express = require('express'); // kind of like our import statement, how to import packages and grab other files, grab express module
var app = express(); // express is a constructor, a class that is returning an object when it's run.
var path = require('path'); // helps us get to the right location.
var bp = require('body-parser'); // allows us to receive information from our front-end.
var port = 8000; // set the port number

app.use(express.static(path.join(__dirname, '/static'))); // client instead of static when we're using angular??
// |_________________||_________||___________________|

// sets up where to look for your static files
// path to get there
// pointing to the file we want (in this case the static file)

// Make sure to create folder in the top folder, called static (the file location listed in segment 3)

app.use(bp.json()); // receiving json data from the front-end (bp = body-parser)

// ***************************************************************************** //

app.set('views', path.join(__dirname, '/views')); // where we look for our views. only include because we're not using angular.

// Make sure to create a folder in the top folder, call it views

app.set('view engine', 'ejs'); // what view engine to use. only include because we're not using angular.

// ***************************************************************************** //

app.get('/', function(req, res){ //if the request was a get request and it was this route, do this.
	return res.render('index')
}); 

app.get('/cats', function(req, res) {
	return res.render('cat')


});

app.listen(port, function() { // listen to the port and run this function when heard
	console.log(`We are listening on port ${port}`)

})