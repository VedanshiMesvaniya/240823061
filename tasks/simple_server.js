const http=require('http');

const server=http.createServer((req,res) =>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("Hello Vedu, this is your first server response! \n Welcome to Node.js!");

});
server.listen(3020,() => {
    console.log("Server is running on http://localhost:3020");
});