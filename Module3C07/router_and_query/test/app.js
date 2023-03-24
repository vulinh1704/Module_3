const http = require('http');
const url = require('url');
http.createServer((req, res) => {
    let parseUrl = url.parse(req.url, true);
    let queryString = parseUrl.query
    console.log(queryString);
    res.write('Hello world');
    res.end();
}).listen(3000, function () {
    console.log("Server running !!");
})