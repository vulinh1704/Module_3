const mysql = require('mysql')

class Connection {
    configToMySql = {
        host: 'localhost',
        user: 'root',
        password: '123456',
        charset: 'utf8_general_ci',
        database: 'manager'
    }

    getConnection = () => {
        return mysql.createConnection(this.configToMySql)
    }

    connectToMySQL = () => {
        this.getConnection().connect(err => {
            if (err) {
                console.log(err)
            } else {
                console.log('Connect Database Success')
            }
        })
    }
}

module.exports = new Connection();