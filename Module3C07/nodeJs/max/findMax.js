const array = [2, 5, 6, 456, 2, 76, 1000, 123, 888];
let max = array[0];
for (const max1 of array) {
    if (max1 > max) {
        max = max1;
    }
}
console.log(max)