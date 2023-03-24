// let happyHanding = (message) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(message === "Yes") {
//                 resolve('Em đồng ý')
//             } else {
//                 reject('Không đồng ý')
//             }
//         }, 5000);
//     });
// }
//
// happyHanding('Yes').then(result => {
//     console.log(result)
// })
// console.log(1)

// let a = 0;
// function sum(){
//     a++;
//     console.log(21,a)
// }
// function sum2(){
//     console.log(1);
// }
//
// setTimeout(sum2,1000);
// setTimeout(sum,1000);
// // console.log(24,a)

//
// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("done!"), 1000);
// });
//
// // resolve runs the first function in .then
// promise.then(
//     result => console.log(result), // shows "done!" after 1 second
//     error => console.log(error) // doesn't run
// );

