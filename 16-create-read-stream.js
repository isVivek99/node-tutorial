const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt");

stream.on("data", (res) => {
  console.log(res);
});
//createReadStream reads files in chunks
