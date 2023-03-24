function sleep(ms) {
    return new Promise((resolve => {
        setTimeout(resolve, ms)
    }))
}

async function countDown(i) {
    while (i > 0) {
        console.log(i)
        i--;
        await sleep(1000);
    }
    return "Count Finished";
}

let counter = countDown(10);
counter.then((msg) => {
    console.log(msg)
})
