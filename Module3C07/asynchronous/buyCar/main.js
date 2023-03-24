let money = 10000;
const buyCar = (car) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve("Can buy " + car);
            } else {
                reject("Do not enough money");
            }
        })
    })
}
money = 100001;
const promise = buyCar("Vinfast").then(value => {
    console.log(value);
}, err => {
    console.log(err);
})