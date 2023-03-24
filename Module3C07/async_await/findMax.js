async function findMax(arr) {
    if (arr instanceof Array) {
        let max = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
    return new Error("Not a Array");
}

function main() {
    try {
        console.log(findMax([1,2,4]));
    } catch (e) {
        console.log(e.message)
    }
}
main()
