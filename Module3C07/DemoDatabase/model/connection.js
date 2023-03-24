const mysql = require('mysql');

class Connection {
    static configToMySql = {
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'demo_co7',
        charset: 'utf8_general_ci'
    }

    static getConnection() {
        return mysql.createConnection(this.configToMySql);
    }

    static connection() {
        this.getConnection().connect((err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Connect Success");
            }
        })
    }
}

module.exports = Connection;