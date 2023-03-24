const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'demo2006',
    charset: 'utf8_general_ci'
});
//
// connection.connect(function (err) {
//     if (err) {
//         throw err.stack;
//     } else {
//         console.log('Connect success');
//     }
// })

// const sql = `select * from demo2006.orderdetail where
//     \`orderId\` = 1`;
// connection.query(sql, function (err,result, fields) {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
//     console.log(fields)
// });


// const sql = "INSERT INTO city(name,zipcode) values ('Ha Noi', '100000'),('T.P HCM','80000'), ('Da Nang', '50000'), ('Nam Dinh', '40000')";
// connection.query(sql, function (err) {
//     if (err) throw err;
//     console.log('Insert data success');
// });