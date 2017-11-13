var users = require('./../controllers/users');

module.exports = function(app) {
	app.get('/', function(req, res) {
		console.log("Hello!");
		return res.json("ajslafkjsl");
	})
}