// const http = require('http');
// const fs = require('fs');
// let server = http.createServer(function (req, res) {
//     let dataFile = '';
//     let html = '';
//     fs.readFile('./data/data', 'utf-8', function (err, str) {
//         dataFile = str.split(',');
//         dataFile.forEach((value, index) => {
//             html += '<tr>';
//             html += `<td>${index + 1}</td>`
//             html += `<td>${value}</td>`
//             html += `<td><button class="btn btn-danger">Delete</button></td>`
//             html += '</tr>';
//         });
//     });
//     fs.readFile('./templates/index.html', 'utf-8', function (err, data) {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         data = data.replace('{list-user}', html);
//         res.write(data);
//         res.end();
//     });
// })
// server.listen('8080', function () {
//     console.log('Server running port 8080');
// })

const http = require('http');
const fs = require('fs');
const qs = require('qs');
let server = http.createServer(function (req, res) {
    let methodRequest = req.method;
    if (methodRequest === 'GET') {
        fs.readFile('./templates/create.html', 'utf-8', (err, data) => {
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            return res.end();
        })
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        });
        req.on('end', () => {
            let name = qs.parse(data).name;
            fs.writeFile('./data/data', name, err => {
                if (err) {
                    console.log('err');
                    return;
                }
                return res.end('Create Success');
            })
        })
        req.on('error' , () => {
            console.log('error');
        })
    }
});

server.listen('8080', function () {
    console.log('Server running port 8080');
});

