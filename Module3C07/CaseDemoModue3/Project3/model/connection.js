const mysql = require('mysql');

class Connection {
    static createConnection() {
        const configToMySql = {
            host: "localhost",
            user: "root",
            password: "123456",
            database: "casestudy3",
            charset: 'utf8_general_ci'
        }
        return mysql.createConnection(configToMySql);
    }
}

module.exports = Connection;