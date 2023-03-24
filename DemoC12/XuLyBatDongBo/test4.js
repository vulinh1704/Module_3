function first() {
    let error = false;
    return new Promise((resolve, reject) => {
        if (!error) {
            setTimeout(() => {
                resolve('Ning đang học hãy chờ')
            }, 1000)
        } else {
            reject('Error')
        }
    })
}

function second() {
    let error = false;
    return new Promise((resolve, reject) => {
        if (!error) {
            setTimeout(() => {
                resolve('Ning bắt đầu học bất đồng bộ')
            }, 1000)
        } else {
            reject('Error')
        }
    })
}

function third() {
    let error = false;
    return new Promise((resolve, reject) => {
        if (!error) {
            setTimeout(() => {
                resolve('Ning ngấm ngấm rồi')
            }, 1000)
        } else {
            reject('Error')
        }
    })
}

function fourth() {
    let error = false;
    return new Promise((resolve, reject) => {
        if (!error) {
            setTimeout(() => {
                resolve('Ning học xong rồi')
            }, 1000)
        } else {
            reject('Error')
        }
    })
}

// Ning đang học hãy chờ
// Ning bắt đầu học bất đồng bộ
// Ning ngấm ngấm rồi
// Ning học xong rồi

//'https://jsonplaceholder.typicode.com/todos/1' : lấy ra todo vị trí 1
const axios = require("axios");
axios.get('https://jsonplaceholder.typicode.com/todos/1') //Hàm .get trả về 1 promise
    .then(data => {
        console.log(data.data)
    })
//{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }


setTimeout(function () {
    console.log('Số 1')
})
console.log('Số 2')

setTimeout(function () {
    console.log('Số 3')
})

console.log('Số 4')



























