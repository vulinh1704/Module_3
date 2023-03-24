let http = require('http');
let url = require('url');
let StringDecoder = require('string_decoder').StringDecoder;

let handlers = {};
handlers.sample = function (data, callback) {
    callback(406, {'name': 'sample handle'});
};
handlers.notFound = function (data, callback) {
    callback(404);
}
handlers.home = function (data, callback) {
    callback(200, 'homepage');
}
let router = {
    'sample': handlers.sample,
    'home': handlers.home
}
let server = http.createServer(function (req, res) {
    let decoder = new StringDecoder('utf-8');
    let buffer = '';

    let parseUrl = url.parse(req.url);
    let path = parseUrl.pathname;
    let trimPath = path.replace(/^\/+|\/+$/g, '');
    console.log(trimPath);
    req.on('data', function (data) {
        buffer += decoder.write(data);
    });
    req.on('end', function (end) {
        // buffer += decoder.end();
        let choseHandle = (typeof (router[trimPath]) !== 'undefined') ? router[trimPath] : handlers.notFound;
        let data = {
            "trimPath": trimPath
        }
        choseHandle(data , function (statusCode, payload) {
            statusCode = typeof (statusCode) == 'number' ? statusCode : 200;
            payload = typeof (payload) == 'object' ? payload : {};
            let payLoadString = JSON.stringify(payload);
            res.writeHead(statusCode);
            res.end(payLoadString);
            console.log("status "+ statusCode + "payload" + payload);
        })
    })
})
server.listen(3000, function () {
    console.log("the server is listening on port 3000 now ");
})

