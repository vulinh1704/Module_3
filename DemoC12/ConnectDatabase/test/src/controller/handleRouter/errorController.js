const fs = require('fs');

class ErrorController {
    showNotFound = (req, res) => {
        fs.readFile('./view/error/notFound.html', 'utf-8', (err, notFoundHtml) => {
            res.writeHead(200, 'text/html');
            res.write(notFoundHtml);
            res.end();
        })
    }
}

module.exports = new ErrorController();