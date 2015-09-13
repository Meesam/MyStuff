
// config application
var express=require("express");
var app=express();
var morgan=require("morgan");
var bodyParser=require("body-parser");
var methodOverride=require("method-override");
var dbmiddleware=require("./middleware/dbconnectionmiddlware");

// user middleware
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended':'true'})); 			
app.use(bodyParser.json()); 									
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride());

// use custom database middleware
app.use(dbmiddleware.dbconnection);

// configure routing
require('./routes/Userroutes')(app);

// set index page on root
app.get('*', function(req, res) {    
    res.sendfile('./public/views/login.html');
 });

// start server to listen the request
app.listen(8080);
console.log("server is running at http://localhost:8080");