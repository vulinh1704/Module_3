let http = require('http');
let url = require('url');
let fs = require('fs');
let handlers = {};
let router = {
    'users': handlers.users,
    'products': handlers.products
}

handlers.products = function (rep, res) {
    fs.readFile('./views/products.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
};

handlers.users = function (rep, res) {
    fs.readFile('./views/users.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
};

handlers.notFound = function (rep, res) {
    fs.readFile('./views/notfound.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
};


let server = http.createServer(function (req, res) {
    let parseUrl = url.parse(req.url);
    let path = parseUrl.pathname;
    console.log(path)
    let trimPath = path.replace(/^\/+|\/+$/g, '');
    let chosenHandler = (typeof (router[trimPath]) !== 'undefined') ? router[trimPath] : handlers.notFound;
    chosenHandler(req, res);
});


server.listen(3000, function () {
    console.log('server running at localhost:3000 ')
});