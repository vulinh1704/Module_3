const fs = require('fs');
const qs = require('qs');
const formidable = require('formidable');

const handlers = {};

handlers.login = function (req, res) {
};

handlers.home = function (req, res) {
    let usersHtml = '';
    fs.readFile('./data/users.json', 'utf-8', (err, users) => {
        users = JSON.parse(users);
        users.forEach((item, index) => {
            usersHtml += `${index + 1} : ${item.name} , ${item.password}<br>`
        });
        fs.readFile('./vie  ws/index.html', 'utf-8', (err, indexHtml) => {
            res.writeHead(200, "text/html");
            indexHtml = indexHtml.replace('{users}', usersHtml);
            res.write(indexHtml);
            res.end();
        })
    })
};

handlers.notFound = function (req, res) {
    fs.readFile('./views/notFound.html', 'utf-8', (err, data) => {
        res.writeHead(200, "text/html");
        res.write(data);
        res.end();
    });
};

handlers.register = function (req, res) {
    if (req.method === "GET") {
        fs.readFile('./views/register.html', 'utf-8', (err, data) => {
            res.writeHead(200, "text/html");
            res.write(data);
            res.end();
        });
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        });
        req.on('end', () => {
            let users = [];
            const userInfo = qs.parse(data); // Object
            fs.readFile('./data/users.json', 'utf-8', (err, usersJson) => {
                users = JSON.parse(usersJson);
                users.push(userInfo);
                users = JSON.stringify(users);
                fs.writeFile('./data/users.json', users, err => {
                    console.log(err);
                });
            })
            res.writeHead(301, {'location': '/home'});
            res.end();
        })
    }
};

handlers.uploads = function (req, res) {
    let form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        //Lấy đượng dẫn tạm thời của  file khi upload
        console.log(files)
        let f = files[""];
        let oldPath = f.files.filepath
        //Đường dẫn mới khi upload
        let newPath = __dirname + '/uploads/' + files.files.name
        //Tiến hành rename file tạm thời thành đường dẫn file mới
        fs.rename(oldPath, newPath, (err) => {
            //Trả ra lõi nếu gặp
            if (err) return res.end(err)

            //Trả về kết quả thành công
            return res.end('<h1 style="color: green;">Upload success !</h1>')
        })
    });
}

module.exports = handlers;



