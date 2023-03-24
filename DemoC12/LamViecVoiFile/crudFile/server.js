const http = require('http');
const fs = require('fs');
let qs = require('qs');
let url = require('url')

let server = http.createServer((req, res) => {
    let match = /\.js|\.css|\.png|\.jpg|\.ttf|\.woff|\.woff2|\.eot/
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
                    <td><button class="btn btn-outline-info">Sửa</button></td>
                    <td>
                    <form method="post">
                    <input type="hidden" name="idDelete" value="${people[i].id}">
                    <button class="btn btn-outline-danger" type="submit">Xóa</button>
                    </form>
                    </td>
                </tr>
            `
            }
            indexHtml = indexHtml.replace('{people}', html);
            res.write(indexHtml);
            res.end();
        })
    }
    if (req.method === 'POST') {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end', () => {
            let user = qs.parse(data);
            if (user.idDelete) {
                let people = JSON.parse(fs.readFileSync('./data/data.json', 'utf-8'))
                let index = people.findIndex(item => {
                    return item.id === user.idDelete
                });
                people.splice(index, 1);
                fs.writeFileSync('./data/data.json', JSON.stringify(people));
                res.writeHead(301, {location: '/'});
                res.end();
            } else {
                let people = JSON.parse(fs.readFileSync('./data/data.json', 'utf-8'))
                people.push(user);
                fs.writeFileSync('./data/data.json', JSON.stringify(people));
                res.writeHead(301, {location: '/'});
                res.end();
            }
        })
    }
});

server.listen(3000, 'localhost', () => {
    console.log('Server is running');
})