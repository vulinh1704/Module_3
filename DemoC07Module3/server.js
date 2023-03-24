const http = require('http');
const url = require('url');

const handlers = require('./service/userService.js');
const router = require('./controller/userRouter.js');

const server = http.createServer((req, res) => {
    let urlParse = url.parse(req.url, true);
    let pathName = urlParse.pathname // /edit/0
    let arrPath = pathName.split('/');
    let trimPath = arrPath[1];
    let chosenHandler;
    if (typeof router[trimPath] === "undefined") {
        chosenHandler = handlers.notFound;
    } else {
        chosenHandler = router[trimPath];
    }
    chosenHandler(req, res); // arrPath[2]
});

server.listen(8080, function () {
    console.log('Server running!')
})


// let handlers = {};
// handlers.login = function (req, res) {
//
// }
//
// handlers.home = function (req, res) {
//     let usersHtml = '';
//     fs.readFile('./data/users.json', 'utf-8', (err, users) => {
//         users = JSON.parse(users);
//         users.forEach((item, index) => {
//             usersHtml += `${index + 1} : ${item.name} , ${item.password} | <a href="edit/${index}">Sửa</a> | <a href="delete/${index}">Xóa</a><br>`
//         });
//         fs.readFile('./views/index.html', 'utf-8', (err, indexHtml) => {
//             res.writeHead(200, "text/html");
//             indexHtml = indexHtml.replace('{users}', usersHtml);
//             res.write(indexHtml);
//             res.end();
//         })
//     })
// }
//
// handlers.notFound = function (req, res) {
//     fs.readFile('./views/notFound.html', 'utf-8', (err, data) => {
//         res.writeHead(200, "text/html");
//         res.write(data);
//         res.end();
//     });
// }
//
// handlers.register = function (req, res) {
//     if (req.method === "GET") {
//         fs.readFile('./views/register.html', 'utf-8', (err, data) => {
//             res.writeHead(200, "text/html");
//             res.write(data);
//             res.end();
//         });
//     } else {
//         let data = '';
//         req.on('data', chunk => {
//             data += chunk;
//         });
//         req.on('end', () => {
//             let users = [];
//             const userInfo = qs.parse(data); // Object
//             fs.readFile('./data/users.json', 'utf-8', (err, usersJson) => {
//                 users = JSON.parse(usersJson);
//                 users.push(userInfo);
//                 users = JSON.stringify(users);
//                 fs.writeFile('./data/users.json', users, err => {
//                     console.log(err);
//                 });
//
//             })
//         })
//         res.writeHead(301, {'location': '/home'});
//         res.end();
//     }
// }
//
// handlers.edit = function (req, res, index) {
//     if (req.method === "GET") {
//         fs.readFile('./views/edit.html', 'utf-8', (err, data) => {
//             res.writeHead(200, "text/html");
//             res.write(data);
//             res.end();
//         });
//     } else {
//         let data = '';
//         req.on('data', chunk => {
//             data += chunk;
//         });
//         req.on('end', () => {
//             let users = [];
//             const userInfo = qs.parse(data);
//             fs.readFile('./data/users.json', 'utf-8', (err, usersJson) => {
//                 users = JSON.parse(usersJson);
//                 for (let i = 0; i < users.length; i++) {
//                     if(i === +index){
//                         users[i] = userInfo;
//                     }
//                 }
//                 users = JSON.stringify(users);
//                 fs.writeFile('./data/users.json', users, err => {
//                     console.log(err);
//                 });
//
//             })
//         })
//         res.writeHead(301, {'location': '/home'});
//         res.end();
//     }
// }
//
// let router = {
//     "home": handlers.home,
//     "login": handlers.login,
//     "register": handlers.register,
//     "edit": handlers.edit
// }x

