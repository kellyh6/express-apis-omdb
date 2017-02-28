//Requires & Global Vars
var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var app = express();

//Set & Use Statements
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(ejsLayouts);
app.use(express.static(__dirname + "/public"));


//Routes
app.get('/', function(req, res) {
  // res.render('main.ejs');
  console.log(Hello backend);
});

//Include external routes
app.use('/', require('./controllers/movieRoute'));

//Listen
var server = app.listen(process.env.PORT || 3000);

module.exports = server;
