var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongodb = require('mongodb');
var logger = require('morgan');
var production = require('dotenv').config()


var app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(process.cwd() + '/public'));


if(process.env.NODE_ENV == 'production'){
  mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds151963.mlab.com:51963/growrule');
}
else{
  mongoose.connect('mongodb://localhost/GrowRuleSchema');
}
var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function() {
  console.log('Mongoose connection successful.');
});

var Article = require('./models/GrowRule.js');

var router = require('./controllers/controller.js');
app.use('/', router);

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Running on port: ' + port);
});
