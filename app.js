var express = require('express');
var app = express();
var fs = require('fs');
var router = require('./router/main')(app);

app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


var server = app.listen(8080, function(){
  console.log('Connected 8080 port!');
});
