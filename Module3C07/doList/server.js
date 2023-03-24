const http = require('http');
const fs = require('fs');
const qs = require('qs')
let data = []
const server = http.createServer(function (req, res) {
    if (req.method === 'GET') {
        fs.readFile('./todo.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else {
        let data2 = ''
        req.on('data', chunk => {
            data2 += chunk;
        })
        req.on('end', () => {
            data.push(qs.parse(data2));
            let work = '';
            for (let i = 0; i < data.length; i++) {
                work += data[i].todo;
            }
            fs.readFile('./display.html', 'utf8', function (err, datahtml) {
                if (err) {
                    console.log(err);
                }
                datahtml = datahtml.replace('{todo}', work);
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(datahtml);
                return res.end();
            });
        })
        req.on('error', () => {
            console.log('error')
        })
    }
});

server.listen(8080, function () {
    console.log('server running at localhost:3000 ')
});