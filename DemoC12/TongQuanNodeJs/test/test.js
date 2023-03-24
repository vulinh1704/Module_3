const fs = require('fs');
const http = require('http');

let server = http.createServer( (req , res) => {
    res.write('Ning');
    res.end();
})
server.listen(3000, '127.0.0.1', () => {
    console.log('Server is running !')
});
