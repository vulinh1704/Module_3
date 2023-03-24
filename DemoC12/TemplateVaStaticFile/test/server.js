const http = require('http');
const fs = require('fs');
let qs = require('qs');

let server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('./views/index.html', "utf-8", (err, indexHtml) => {
            res.write(indexHtml);
            res.end();
        })
    }
    if (req.method === 'POST') {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end', () => {
            let user = qs.parse(data);
            console.log(user)
        })
    }
});

server.listen(3000, 'localhost', () => {
    console.log('Server is running');
})