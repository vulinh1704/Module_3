const http = require('http');
const url = require('url');
const router = require('./controller/router');

function getPath(req) {
    let urlParse = url.parse(req.url, true);
    let pathName = urlParse.pathname;
    return pathName.split('/');
}

const server = http.createServer((req, res) => {
    let arrPath = getPath(req);
    let trimPath = arrPath[arrPath.length - 1];
    let chosenHandler;
    if (typeof router[trimPath] === "undefined") {
        chosenHandler = router["notFound"];
    } else {
        chosenHandler = router[trimPath];
    }
    chosenHandler(req, res);
});

server.listen(8080, () => {
    console.log("Server is running !!")
})