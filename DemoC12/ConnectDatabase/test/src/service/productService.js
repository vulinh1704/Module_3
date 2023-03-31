const connection = require('../model/connection');

class ProductService {
    connect;

    constructor() {
        connection.connectToMySQL();
        this.connect = connection.getConnection();
    }

    findAll = () => {
        return new Promise((resolve, reject) => {
            this.connect.query('select products.*, categories.name_category from products join categories on categories.id = products.id_category', (err, products) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(products)
                }
            })
        })
    }
}

module.exports = new ProductService();
