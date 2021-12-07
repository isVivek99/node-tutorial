const http = require("http");

//using event emmiter api
const server = http.createServer();
//emits requet event
//subscribe to it/listen to it
server.on("request", (req, res) => {
  res.end("welcome!");
});
//http.Server extends net.Server which extends eventEmiiter
server.listen(5001);
