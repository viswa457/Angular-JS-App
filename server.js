
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000)) 
  
  app.use(express.static('public'));
  app.listen(app.get('port'),function(){
  console.log("Example app listening at localhost:" +app.get('port'))

}); 

/*
  var express = require('express');
var app = express();

app.use(express.static('public'));

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

}) */