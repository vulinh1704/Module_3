const http = require('http');
const fs = require('fs');
let url = require('url');
let server = http.createServer((req, res) => {
    if(req.method === 'GET') {
        fs.readFile('./index.html', (err, indexHtml) => {
            res.write(indexHtml);
            res.end();
        })
    }
})
server.listen(3000, 'localhost', () => {
    console.log('Server is running ')
});
