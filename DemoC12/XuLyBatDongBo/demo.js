let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve([1])
    }, 0)
})

let promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve([2, 3])
    }, 0)
})


let promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve([4, 5])
    }, 0)
})

async function show() {
    try {
        let data1 = await promise; // [1]
        let data2 = await promise2;
        let data3 = await promise3;
        let list = [data1, data2, data3];
        return 1;
    } catch (e) {
        console.log(e)
    }
}

show().then((data) => {
    console.log(data)
})