const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    let url = req.url;
    let trimPath = url.split('/')[1];
    let chosenHandle;
    if (router[trimPath] === undefined) {
        chosenHandle = handle.error;
    } else {
        chosenHandle = handle[trimPath];
    }
    chosenHandle(req, res);

}).listen(3000, () => {
    console.log('Server is running ')
});

let handle = {}
handle.home = (req, res) => {
    fs.readFile('./views/index.html', (err, data) => {
        res.write(data);
        res.end();
    })
}

handle.error = (req , res) => {
    res.write('<h1>404 Not Found</h1>')
    res.end();
}

let router = {
    'home': handle.home
}

