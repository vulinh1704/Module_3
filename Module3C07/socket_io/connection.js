const mysql = require('mysql');

class Connection {
    static createConnectionMySQL() {
        const configMySQL = {
            host: 'localhost',
            user: 'root',
            password: '123456',
            database: 'linhtest2'
        };
        return mysql.createConnection(configMySQL);
    }
}

module.exports = Connection;