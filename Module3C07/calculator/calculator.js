const http = require('http');
const fs = require('fs');
const qs = require('qs')

const server = http.createServer(function (req, res) {
    if (req.method === 'GET') {
        fs.readFile('./index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end', () => {
            const userInfo = qs.parse(data);
            let result = 0;
            fs.readFile('./index.html', 'utf8', function (err, datahtml) {
                if (err) {
                    console.log(err);
                }
                if(userInfo.typeCal === "-"){
                    result = userInfo.number1 - userInfo.number2
                } else if (userInfo.typeCal === "+"){
                    result = +userInfo.number1 + +userInfo.number2
                } else if (userInfo.typeCal === "*") {
                    result = userInfo.number1 * userInfo.number2
                } else if(userInfo.typeCal === "/") {
                    result = userInfo.number1 / userInfo.number2
                }
                datahtml = datahtml.replace('{result}', result);
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

server.listen(3000, function () {
    console.log('server running at localhost:8080 ')
});