const fs = require('fs');

function showNotFound(req, res) {
    fs.readFile(`./views/notFound/notFound.html`, 'utf-8', (error, dataHtml) => {
        res.writeHead(200, "text/html");
        res.write(dataHtml);
        res.end();
    });
}

module.exports = showNotFound;