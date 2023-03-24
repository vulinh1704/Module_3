const http = require('http');
const fs = require('fs');
const qs = require('qs');

http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('./views/resgister.html', function (err, data) {
            if (err) {
                console.log(err);
            }
            res.write(data);
            res.end();
        })
    }
    if (req.method === 'POST') {
        let data = '';
        req.on('data', chunk => {
            data += chunk; //?name=linh&pass=1
        });

        req.on('end', () => {
            const userInfo = qs.parse(data);
            fs.readFile('views/infor.html', 'utf-8', function (err, datahTml) {
                datahTml = datahTml.replace('{name}', userInfo.name);
                datahTml = datahTml.replace('{email}', userInfo.email);
                datahTml = datahTml.replace('{password}', userInfo.password);
                res.write(datahTml);
                res.end();
            })
        })
    }
}).listen(3000);