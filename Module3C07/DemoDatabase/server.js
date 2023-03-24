const http = require('http');
const url = require('url');
const handler = require('./controller/router');
const notFoundRouter = require('./controller/handler/notFoundRouter');

function getPath(req) {
    const urlParse = url.parse(req.url);
    const pathName = urlParse.pathname;
    return pathName.split('/');
}

const server = http.createServer((req, res) => {
    const arrPath = getPath(req);
    const trimPath = arrPath[arrPath.length - 1];
    let chosenHandler;
    if (typeof handler[trimPath] === 'undefined') {
        chosenHandler = notFoundRouter.showNotFound;
    } else {
        chosenHandler = handler[trimPath];
    }
    chosenHandler(req, res);
});

server.listen(8080, () => {
    console.log('Server is running on http:localhost:8080');
});