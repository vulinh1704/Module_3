const http = require('http');
const fs = require('fs');
const url = require("url");
let server = http.createServer((req, res) => {
    let parseUrl = url.parse(req.url, true);
    let path = parseUrl.pathname;
    let trimPath = path.replace(/^\/+|\/+$/g, '');
    // let chooseHandle;
    // if (typeof trimPath == 'undefined') {
    //     chooseHandle = handles.notFound;
    // } else {
    //     chooseHandle = router[trimPath];
    // }
    // console.log(chooseHandle(req, res));
    let chosenHandler = (typeof (router[trimPath]) !== 'undefined') ? router[trimPath] : handles.notFound;
    chosenHandler(req, res);
});

server.listen(3000, () => {
    console.log("Server running");
})

let handles = {};

handles.home = (req, res) => {
    getTemplate(req, res, './views/index.html');
}

handles.notFound = (req, res) => {
    getTemplate(req, res, './views/notfound.html');
}
handles.login = (req, res) => {
    getTemplate(req, res, './views/login.html');
}

let getTemplate = (req, res, path) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
            console.log('Lỗi');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        }
    });
}

let router = {
    'register': handles.register,
    'login': handles.login,
    '': handles.home
}