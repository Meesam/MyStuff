var express=require("express");
var app=express();
var morgan=require("morgan");
var bodyParser=require("body-parser");
var methodOverride=require("method-override");
var dbmiddleware=require("./middleware/dbconnectionmiddlware");

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended':'true'})); 			
app.use(bodyParser.json()); 									
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride());

app.use(dbmiddleware.dbconnection);
require('./routes/Userroutes')(app);


app.get('*', function(req, res) {    
    res.sendfile('./public/views/index.html');
 });


app.listen(8080);
console.log("server is running at http://localhost:8080");