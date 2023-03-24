async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => reject("fail!"), 1000)
    });
    let result = await promise; //line A wait until the promise resolves (*)
    console.log(result); // "done!"
}

f();