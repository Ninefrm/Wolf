
var express = require('express');
var app = express();
var Confirm = require('prompt-confirm');

var port=process.env.PORT||3000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var confirm = new Confirm('¿Funciono?')
  .ask(function(answer){
    console.log(answer);
  });

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
