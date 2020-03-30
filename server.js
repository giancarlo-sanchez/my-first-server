const http = require('http');

http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.write('<h1>Hello, world!</h1>');
    response.end();
}).listen(8080, function(){
    console.log("listening for requests on port 8080...")
});
