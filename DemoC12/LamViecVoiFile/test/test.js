let fs = require('fs');
let readStream = fs.createReadStream('./linh.txt');
// readStream.on('data', (chunk) => {
//     console.log(`Doc luong : `)
//     console.log(chunk)
// })
// fs.readFile('./linh.txt', (err, data) => {
//     console.log(data)
// })
// fs.writeFile('./test.txt', 'Linh', (err) => {
//     console.log(err)
// })
fs.readFile('./test.txt', {flag: 'w+', encoding: 'utf-8'}, (err, data) => {
    console.log(data)
})