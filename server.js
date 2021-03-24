const{createServer} = require('http');

let server = createServer((request, response) => {
    response.writeHead(200,{"Content-type":"text/html"});
    response.write('<h1>Hello World</h1>');
    console.log("Exeuctou a chamada");
});

server.listen(8000);

console.log("Projeto Iniciado");