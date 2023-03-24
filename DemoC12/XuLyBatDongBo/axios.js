let axios = require('axios')
axios.get('https://jsonplaceholder.typicode.com/todos/1').then((todo) => {
    console.log(todo.data)

})


async function getData() {
    let data = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(data.data);

    return data;
}