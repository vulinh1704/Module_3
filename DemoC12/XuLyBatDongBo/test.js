const axios = require("axios");


console.log(0)
setTimeout(() => {
    console.log(1)
}, 1)
axios.get('https://jsonplaceholder.typicode.com/todos').then(data => {
    console.log(3)
})
console.log(2)





