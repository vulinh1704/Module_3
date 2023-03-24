const http = require('http');
const mysql = require('mysql');
const fs = require('fs');
const url = require('url');
const qs = require('qs');

let configToMySql = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'linhtest2'
};
let connection = mysql.createConnection(configToMySql);

function getProduct() {
    return new Promise((resolve, reject) => {
        connection.query('select * from products;', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

connection.connect(err => {
    if (err) {
        console.log(err)
    } else {
        console.log('Connect Success');
    }
});


let server = http.createServer((req, res) => {
    const urlParse = url.parse(req.url);
    const urlPath = urlParse.pathname;
    switch (urlPath) {
        case '/':
            fs.readFile('views/index.html', 'utf-8', (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(data);
                    res.end();
                }
            })
            break;
        case '/products':
            fs.readFile('views/products/list.html', 'utf-8', async (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    let products = await getProduct();x
                    let tbody = '';
                    //     products.map((product, index) => {
                    //         tbody += ` <tr>
                    //     <td>${index + 1}</td>
                    //     <td>${product.name}</td>
                    //     <td>${product.price}</td>
                    //     <td><a href="/product/edit/${product.id}" class="btn btn-info">Edit</a></td>
                    //     <td><a href="/product/delete/${product.id}" class="btn btn-danger">Delete</a></td>
                    // </tr>`
                    //     });
                    for (let index = 0; index < products.length; index++) {
                        tbody += `
                    <tr>
                    <td>${index + 1}</td>
                    <td>${products[index].name}</td>
                    <td>${products[index].price}</td>
                    <td><a href="/product/edit/${products[index].id}" class="btn btn-info">Edit</a></td>
                    <td><a href="/product/delete/${products[index].id}" class="btn btn-danger">Delete</a></td>
                    </tr>`
                    }
                    data = data.replace('{products}', tbody);
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(data);
                    res.end();
                }
            })
            break;
        case '/products/create':
            let method = req.method;
            if (method === 'GET') {
                fs.readFile('views/products/create.html', 'utf-8', (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.writeHead(200, {'Content-Type': 'text/html'});
                        res.write(data);
                        res.end();
                    }
                })
            } else {
                let data = '';
                req.on('data', chunk => {
                    data += chunk;
                })
                req.on('end', () => {
                    const product = qs.parse(data);
                    connection.query(`insert into products(name, price, description)
                                      VALUES (${product.name}, ${product.price},
                                              ${product.description})`, (err, data) => {
                        if (err) {
                            console.log(err)
                        } else {
                            console.log('Insert Success');
                        }
                    })
                })
                res.writeHead(301, {'location' : '/products'});
                res.end();
            }
            break;
        default :
            fs.readFile('views/error-404.html', 'utf-8', (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(data);
                    res.end();
                }
            })
            break;
    }
})

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})