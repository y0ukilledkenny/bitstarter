var express = require('express');
var fs=require('fs');
var app = express.createServer(express.logger());


fs.readFile('index.html',function(err,indexBuf){
    if(err){console.log('cannot read index.html');}
};

	    
app.get('/', function(request, response) {
    
  response.send(indexBuf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
