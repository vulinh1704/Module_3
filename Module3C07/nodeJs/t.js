const http = require('http');
//req là gửi dữ liệu lên sever, resp là cái sever trả về
http.createServer(function (req,res){
    res.write('Hello')
    res.end()
}).listen(3000);

