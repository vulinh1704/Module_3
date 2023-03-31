let arr = []

function pairOfNumber(A, n) {
    for (let i = 0; i < A.length - 1; i++) {
        let numbers = A[i] + ''
        for (let j = i + 1; j < A.length; j++) {
            numbers += A[j];
            if (numbers.length === n) {
                arr.push(numbers);
                continue;

            }
        }
    }
    console.log(arr)
}

pairOfNumber([1, 2, 3], 2)