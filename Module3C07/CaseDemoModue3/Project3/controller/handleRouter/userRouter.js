const fs = require('fs');

class UserRouter {
    register(req, res) {
        if (req.method === "GET") {
            fs.readFile(`./views/user/register.html`, 'utf-8', (error, dataHtml) => {
                res.writeHead(200, "text/html");
                res.write(dataHtml);
                res.end();
            });
        }
    }
}

module.exports = new UserRouter();