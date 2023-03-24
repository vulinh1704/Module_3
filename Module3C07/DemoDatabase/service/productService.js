const Connection = require('../model/connection');
Connection.connection();

class ProductService {
    getProducts() {
        return new Promise((resolve, reject) => {
            const connection = Connection.getConnection();
            connection.query(`select * from  products`, (err, data) =>{
                if(err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        })
    }
}

module.exports = new ProductService();