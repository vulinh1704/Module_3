const User = require('../model/user');
const Connection = require('../model/connection');

class UserService {
    connection = Connection.createConnection();

    getConnection() {
        this.connection.connect(error => {
            if (error) {
                console.log(error);
            } else {
                console.log("Connect Success !");
            }
        })
    }

    findAll() {
        this.getConnection();
        return new Promise((resolve, reject) => {
            this.connection.query('select * from user', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    findById(id) {
        this.getConnection();
        return new Promise((resolve, reject) => {
            this.connection.query(`select *
                                   from user
                                   where id = ${id}`, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    register(user) {
        this.getConnection();
        return new Promise((resolve, reject) => {
            this.connection.query(`insert into user(id, username, password, name, dateOfBirth, sex, email, image,
                                                    createDate, roleId, status)
                                   values (${user.id}, ${user.name}, ${user.password}, ${user.dateOfBirth}, ${user.sex},
                                           ${user.email}, ${user.createDate}, ${user.roleId},
                                           ${user.status})`, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
}

module.exports = new UserService();
