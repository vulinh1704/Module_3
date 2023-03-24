const http = require('http');
const server = http.createServer((req, res) => {
    res.write('<h1>Ha ha </h1>')
    res.end()
})

server.listen(3000, 'localhost', ()=> {
    console.log('Server chạy')
})