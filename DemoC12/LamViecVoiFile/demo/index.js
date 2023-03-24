let fs = require('fs');
fs.readFile('./data', (err, data) => {
    console.log('Không Luồng : ')
    console.log(data)
})

let stream = fs.createReadStream('./data')
stream.on('data', chunk => {
    console.log('Luồng là : ')
    console.log(chunk)
})