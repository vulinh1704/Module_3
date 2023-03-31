const productController = require('./handle/productController')
const router = {
    "home" : productController.showHome,
    "edit" : productController.editProduct
};

module.exports = router