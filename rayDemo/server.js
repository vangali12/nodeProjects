var express = require("express");
var bp = require("body-parser");
var path = require("path");
var session = require("express-session")

var app = express();

const port = 8000;

app.use(express.static(path.join(__dirname, "/static")));

app.use(bp.urlencoded());
app.use(session({secret: "silverLines"}));

app.set("views", path.join(__dirname, "/views"));
app.set("views engine", "ejs");

require("./config/routes")(app);

app.listen(port, function() {
	console.log(`Listening on port ${port}`)
})

