const http = require('http');
const fs = require('fs');
let server = http.createServer((req, res) => {
    let url = req.url;
    let arrPath = url.split('/');
    let path = arrPath[1];

    let chosenHandle;
    if (router[path] !== undefined) {
        chosenHandle = router[path];
    } else {
        chosenHandle = handle.error;
    }
    chosenHandle(req, res);
})
server.listen(3000, 'localhost', () => {
    console.log('Server is running ')
});



let handle = {};
handle.home = (req, res) => {
    fs.readFile('./views/index.html', (err, indexHtml) => {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(indexHtml);
        res.end();
    })
}

handle.error = (req, res) => {
    fs.readFile('./views/error.html', (err, errorHtml) => {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(errorHtml);
        res.end();
    })
}

handle.login = (req, res) => {
    fs.readFile('./views/login.html', (err, loginHtml) => {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(loginHtml);
        res.end();
    })
}

let router = {
    'home': handle.home,
    'login': handle.login
}