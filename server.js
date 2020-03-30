const http = require('http');

http.createServer((req,res)=>{

    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write("hey wassup hola que mas");
    res.end();
    //req.writeHead(200,{'Content-Type': 'text/html'});
   //req.write('<h1>Hello, world!</h1>');
   //req.end();
}).listen(3000, ()=>{
    console.log("escuchando en el puerto numero 3000...");
});
