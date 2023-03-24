const http = require('http');
const qs = require('qs');
const fs = require('fs');
http.createServer((req, res) => {
    const url = req.url;
    const filename = url.split('/')[2];
    const suffix = url.split('.')[1];
    console.log('name', filename)
    switch (suffix) {
        case `jpg` : {
            fs.readFile(`img/${filename}`, (err, data) => {
                res.writeHead(200, {'Content-Type': 'image/jpg'});
                res.write(data);
                return res.end();
            })
        }
            break;
        case `gif` : {
            fs.readFile(`img/${filename}`, (err, data) => {
                res.writeHead(200, {'Content-Type': 'image/gif'});
                res.write(data);
                return res.end();
            })
        }
            break;
        case `css` : {
            fs.readFile(`css/${filename}`, (err, data) => {
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.write(data);
                return res.end();
            })
        }
            break;
        default: {
            fs.readFile('./demo.html', (err, data) => {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            })
        }
            break;
    }

}).listen(3000, function () {
    console.log('Server running !!')
})