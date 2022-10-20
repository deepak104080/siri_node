const http = require('http');


const hostname = '127.0.0.1'; //localhost
const port = 3030;

// Module concept - es6 module concept - import export
// Old - require(filename)

const server = http.createServer((req, resp) => {
    // console.log(req.headers)
    // console.log(req.body)
    resp.statusCode = 200;
    resp.setHeader('Content-type', 'text/plain');
    // resp.done('Server is running...');
})

server.listen(port, hostname, () => {
    console.log(`Server is running at ${hostname}:${port}`);
})