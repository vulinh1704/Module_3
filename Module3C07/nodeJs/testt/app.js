const fs = require('fs');
console.log("Start");
//tham số thứ 3 là hàm call back nếu  lỗi vào err nếu vào đc thì vô data
console.log(fs.readFileSync('test','utf-8'))
console.log("End");
