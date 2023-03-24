// const fs = require("fs");
// let data = '';
// // Đọc file bằng streams bằng phương thức createReadStream
// const readerStream = fs.createReadStream('input');
// // Kiểu mã hóa dùng là UTF8
// readerStream.setEncoding('UTF8');
// // Sự kiện khi đọc data
// readerStream.on('data', function(chunk) {
//     data += chunk;
// });
// //Khi kết thúc đọc data và in ra nội dung đã đọc
// readerStream.on('end',function(){
//     console.log(data)
// });
// //Khi xảy ra lỗi in ra lỗi
// readerStream.on('error', function(err){
//     console.log(err.stack);
// });

const fs = require("fs");
let data = 'Học lập trình NodeJS';
//Sử dụng phương thức createWriteStream
const writerStream = fs.createWriteStream('input    ');
// Ghi dữ liệu vào file
writerStream.write(data);
// Đánh dấu đây là cuối file
writerStream.end();
// Bắt sự kiện finish của Streams
writerStream.on('finish', function() {
    console.log("Write done.");
});
// Bắt sự kiện error khi xảy ra lỗi
writerStream.on('error', function(err){
    console.log(err.stack);
});