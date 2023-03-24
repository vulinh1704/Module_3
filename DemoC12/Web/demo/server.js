const http = require('http');
const fs = require('fs');
const qs = require('qs');
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('./views/register.html', 'utf-8', (err, htmlRegister) => {
            res.write(htmlRegister);
            res.end();
        })
    }
    if (req.method === 'POST') {
        let dataInput = '';
        req.on('data', (chunk) => {
            dataInput += chunk;
            console.log(dataInput)
        })
        req.on('end', () => {
            let userInfo = qs.parse(dataInput);
            console.log(userInfo)
            fs.readFile('./views/info.html', 'utf-8', (err, dataInfoHtml) => {
                dataInfoHtml = dataInfoHtml.replace('{username}', userInfo.username);
                dataInfoHtml = dataInfoHtml.replace('{age}', userInfo.age);
                dataInfoHtml = dataInfoHtml.replace('{sex}' , userInfo.sex);
                res.write(dataInfoHtml);
                res.end();
            })
        })
    }
})
server.listen(3000, '127.0.0.1', () => {
    console.log('Server is running!')
})
