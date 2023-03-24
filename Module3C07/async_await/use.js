async function getSum(arr) {
    if (arr instanceof Array) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
    throw new Error('Input data is incorrect')
}

async function f() {
    try {
        let result = getSum([1,1]);
        console.log(result);
    } catch (e) {
        console.log(e);
    }
}
f();