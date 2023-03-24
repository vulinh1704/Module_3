const http = require('http');
const fs = require('fs');
let qs = require('qs')
let server = http.createServer((req, res) => {
    let url = req.url //  /users;
    let arrPath = url.split('/')
    let path = arrPath[1];
    let chosenHandle;
    if (router[path] !== undefined) {
        chosenHandle = router[path]
    } else {
        chosenHandle = handle.error;
    }
    chosenHandle(req, res, arrPath[2]);
})

server.listen(3000, 'localhost', () => {
    console.log('Server is running ')
});

let handle = {};

handle.users = (req, res) => {
    if (req.method === 'GET') {
        fs.readFile('./views/index.html', "utf-8", (err, indexHtml) => {
            let people = JSON.parse(fs.readFileSync('./data/data.json', 'utf-8'));
            let html = ''
            for (let i = 0; i < people.length; i++) {
                html += `
                 <tr>
                    <th scope="row">${people[i].id}</th>
                    <td>${people[i].name}</td>
                    <td>${people[i].age}</td>
                    <td>${people[i].sex}</td>
                    <td><img src="${people[i].image}" style="width: 40px;height:40px;"></td>
                    <td><button class="btn btn-outline-info"><a href="/edit/${people[i].id}">Sửa</a></button></td>
                    <td>
                    <input type="hidden" name="idDelete" value="${people[i].id}">
                    <button class="btn btn-outline-danger" type="submit">Xóa</button>
                    </td>
                </tr>
            `
            }
            indexHtml = indexHtml.replace('{people}', html);
            res.write(indexHtml);
            res.end();
        })
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk // ?name=linh&age=1
        })
        req.on('end', () => {
            let user = qs.parse(data); // {name : 'linh' ,...}
            let users = JSON.parse(fs.readFileSync('./data/data.json', 'utf-8'));
            users.push(user);
            fs.writeFileSync('./data/data.json', JSON.stringify(users));
            res.writeHead(301, {location: '/users'})
            res.end();
        })
    }
}

handle.error = (req, res) => {
    fs.readFile('./views/error.html', (err, errorHtml) => {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(errorHtml);
        res.end();
    })
}

handle.edit = (req, res, id) => {
    if(req.method === 'GET') {
        fs.readFile('./views/edit.html', 'utf-8', (err, editHtml) => {
            let users = JSON.parse(fs.readFileSync('./data/data.json', "utf-8"));
            let index = users.findIndex(item => {
                return item.id === id
            });
            let user = users[index];
            editHtml = editHtml.replace('{id}', user.id);
            editHtml = editHtml.replace('{name}', user.name);
            editHtml = editHtml.replace('{age}', user.age);
            editHtml = editHtml.replace('{sex}', user.sex);
            res.write(editHtml);
            res.end()
        })
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk
        })
        req.on('end', () => {
            let user = qs.parse(data);
            let users = JSON.parse(fs.readFileSync('./data/data.json', 'utf-8'));
            let index = users.findIndex(item => {
                return item.id === id
            });
            users[index] = user;
            fs.writeFileSync('./data/data.json', JSON.stringify(users));
            res.writeHead(301, {location: '/users'})
            res.end();
        })
    }
}


let router = {
    'users': handle.users,
    'edit': handle.edit
}

