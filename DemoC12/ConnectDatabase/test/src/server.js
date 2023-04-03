let http = require('http');
let router = require('./controller/router')
let handleError = require('./controller/handleRouter/errorController')

let server = http.createServer((req, res) => {
    let url = req.url;
    let arrPath = url.split('/');
    let id = -1;
    let path = '';
    console.log(arrPath)
    if (arrPath.length > 2) {
        path = arrPath[1];
        id = arrPath[2]
    }
    if (arrPath.length <= 2) {
        path = arrPath[1];
    }
    let chosenHandle;
    if (router[path] !== undefined) {
        chosenHandle = router[path]
    } else {
        chosenHandle = handleError.showNotFound
    }
    chosenHandle(req, res, id)
})
server.listen(8081, 'localhost', () => {
    console.log('Server is running')
})