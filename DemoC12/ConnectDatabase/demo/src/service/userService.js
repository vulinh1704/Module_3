const connection = require('../entity/connection');

class UserService {
    connect;

    constructor() {
        connection.connectToMySQL();
        this.connect = connection.getConnection();
    }

    getUser = (user) => {
        return new Promise((resolve, reject) => {
            this.connect.query(`select * from users where username = '${user.username}' and password = '${user.password}';`, (err, users) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(users)
                }
            })
        })
    }

}

module.exports = new UserService();