
var http = require('http');


var server = http.createServer(function (req, res){
    res.end('<h1>Server Worked!!!!</h1>');
});

server.listen(3000, 'localhost',function(){
    console.log('Server started on port : 3000');
});