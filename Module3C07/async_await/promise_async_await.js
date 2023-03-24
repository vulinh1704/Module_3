async function getDivision(a, b) {
    if (b !== 0) {
        return a / b;
    }
    return new Error("Math error !");
}

async function f() {
    try {
        let result = await getDivision(1, 2);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

f();

// const promise = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//                 if (b !== 0) resolve(a/b);
//                 else reject(new Error('Math error'))
//             }
//         )
//     })
// }
// promise(2,3).then(x => console.log(x))
// .catch(error => console.log(error));