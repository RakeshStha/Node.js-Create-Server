
var http = require('http'); // callinf http library


var server = http.createServer(function (req, res){ // Creating server
    res.end('<h1>Server Worked!!!!</h1>'); //Setting content Headers
});

server.listen(3000, 'localhost',function(){  //assigning 3000 as server listening ports
    console.log('Server started on port : 3000');
});
