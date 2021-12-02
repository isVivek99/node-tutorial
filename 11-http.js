const http  = require('http')
const server = http.createServer((req,  res)=>{
    if (req.url === '/') {
        res.write('<h1>Hello, Node.js!</h1>');
        res.end();
    }else if(req.url === '/about'){
        res.write('<h1>This is what we are about bisch!!</h1>');
        res.end();
    }else{
res.write(`
        <a href="/">back home mf</a>
    `);
    res.end()
    }
    
})
server.listen(1110)