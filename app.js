var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

var app = express();
var port = process.env.port || 3000;

var config = require('./config');

var setupController = require('./api/controllers/setupController.js');

// cau hinh app
app.use('/assert', express.static(__dirname + '/public'));
// kieu data muon su dung (kieu json)
app.use(bodyParser.json()); 
// chap nhan tat ca cac du lieu dc gui ve server theo nhieu phuong phap
app.use(bodyParser.urlencoded({extended: true}));

app.use(morgan("dev"));
// khai bao template engine (ejs)
app.set("view engine", "ejs");

// connect db
mongoose.connect(config.getDbConnectionString());
// insert data vao bang todos
setupController(app);

// route
app.get("/", function (req, res){
    res.render('index');
})

app.listen(port, function (){
    console.log("App listening on port :"+ port);
});