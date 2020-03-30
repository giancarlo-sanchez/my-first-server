const http = require('http');

http.createServer((req,res)=>{

    if(req.url ==='/OK'){
        console.log("Inbound OK request in process");
        res.writeHead(200);
     //res.write("hey wassup hola que mas");

        res.end();
    }
    else if(req.url === "/Bad-Request"){
        console.log("inbound Bad-Request");
        res.writeHead(400);
        res.end();
    }
    else if(req.url === "/Created"){
        console.log("inbound created request");
        res.writeHead(201);
        res.end();
    }
    else if(req.url === "/Forbidden"){
        console.log("inbound Request forbidden");
        res.writeHead(403);
        res.end();
    }
    else if(req.url === "/Found"){
        console.log("inbound request found");
        res.writeHead(302);
        res.end();
    }
    else if(req.url === "/Gateway-Timeout"){
        console.log("gateway timeout on request");
        res.writeHead(504);
        res.end();
    }
    else if(req.url === "/Internal-Server-Error"){
        console.log("server has encountered unexpected condition");
        res.writeHead(500);
        res.end();
    }
    else if(req.url === "/Moved-Permanently"){
        console.log("target has been reassigned to new URI");
        res.writeHead(301);
        res.end();
    }
    else if(req.url === "/Unauthorized"){
        console.log("you are unauthorized to go here");
        res.writeHead(401);
        res.end();
    }
    else{
        console.log("Hay que pena no se puede ubicar la pagina.");
        res.writeHead(404);
        res.end();
    }

    //req.writeHead(200,{'Content-Type': 'text/html'});
   //req.write('<h1>Hello, world!</h1>');
   //req.end();
}).listen(3000, ()=>{
    console.log("escuchando en el puerto numero 3000...");
});
