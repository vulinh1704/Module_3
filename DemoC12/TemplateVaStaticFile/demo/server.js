const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/hello.png') {
        fs.readFile('./views/hello.png', (err, image) => {
            res.writeHead(200, {'Content-Type': 'image/png'})
            res.write(image);
            res.end();
        })
    } else if (req.url === '/style.css') {
        fs.readFile('./views/style.css', (err, style) => {
            console.log(style)
            res.writeHead(200, {'Content-Type': 'text/css'})
            res.write(style);
            res.end();
        })
    } else {
        fs.readFile('./views/index.html', "utf-8", (err, indexHtml) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(indexHtml);
            res.end();
        })
    }
});

server.listen(3000, 'localhost', () => {
    console.log('Server is running');
})