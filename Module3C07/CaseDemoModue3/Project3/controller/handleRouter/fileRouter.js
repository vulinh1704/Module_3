const fs = require('fs');
const CONTENT_TYPE_CSS = "text/css";

class FileRouter {
    getTemplate(req, res, path, contentType) {
        fs.readFile(path, 'utf-8', (error, dataHtml) => {
            res.writeHead(200, contentType);
            res.write(dataHtml);
            res.end();
        });
    }

    allMinCss(req, res) {
        this.getTemplate(req, res, "../views/assets/vendor/font-awesome/css/all.min.css", CONTENT_TYPE_CSS);
    }

    bootTrapIconCss(req, res) {
        this.getTemplate(req, res, "../views/assets/vendor/bootstrap-icons/bootstrap-icons.css", CONTENT_TYPE_CSS);
    }
}

module.exports = new FileRouter();